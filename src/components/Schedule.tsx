import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Schedule = ({ doctor }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableAppointments, setAvailableAppointments] = useState<any[]>([]);

  useEffect(() => {
    const doctorSchedule = doctor.schedule.find(
      (schedule: any) =>
        new Date(schedule.date).toDateString() === selectedDate.toDateString()
    );

    if (doctorSchedule) {
      setAvailableAppointments(doctorSchedule.appointments);
    } else {
      setAvailableAppointments([]);
    }
  }, [selectedDate, doctor]);

  const handleNextDay = () => {
    setSelectedDate((prevDate) => {
      const nextDay = new Date(prevDate);
      nextDay.setDate(prevDate.getDate() + 1);
      return nextDay;
    });
  };

  const handlePreviousDay = () => {
    setSelectedDate((prevDate) => {
      const prevDay = new Date(prevDate);
      prevDay.setDate(prevDate.getDate() - 1);
      return prevDay;
    });
  };

  const handleBookAppointment = (time: string) => {
    const updatedAppointments = availableAppointments.map((appointment: any) =>
      appointment.time === time ? { ...appointment, isBooked: true } : appointment
    );

    setAvailableAppointments(updatedAppointments);

  };

  return (
    <Card>
      <Header>
        <h2>Agende sua sessão</h2>
        <p>Time zone: Brazil (+3)</p>
      </Header>
      <ScheduleContainer>
        <DateNavigation>
          <ArrowButton onClick={handlePreviousDay}>{"<"}</ArrowButton>
          <DateDisplay>{selectedDate.toLocaleDateString()}</DateDisplay>
          <ArrowButton onClick={handleNextDay}>{">"}</ArrowButton>
        </DateNavigation>

        <AvailableAppointments>
          {availableAppointments.length > 0 ? (
            availableAppointments.map((appointment: any, index: number) => (
              <AppointmentSlot
                key={index}
                isBooked={appointment.isBooked}
                disabled={appointment.isBooked}
                onClick={() =>
                  !appointment.isBooked && handleBookAppointment(appointment.time)
                }
              >
                {appointment.time}
              </AppointmentSlot>
            ))
          ) : (
            <p>Sem horários disponíveis para este dia.</p>
          )}
        </AvailableAppointments>
      </ScheduleContainer>
    </Card>
  );
};

export default Schedule;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ScheduleContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const Header = styled.div`
  background-color: #007bff;
  color: white;
  padding: 3px;
  text-align: center;
  border-radius: 8px;
`;

const DateNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ArrowButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateDisplay = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const AvailableAppointments = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const AppointmentSlot = styled.button<{ isBooked: boolean; disabled: boolean }>`
  background-color: ${({ isBooked }) => (isBooked ? "#ccc" : "#007bff")};
  color: ${({ isBooked }) => (isBooked ? "#888" : "white")};
  border: 1px solid ${({ isBooked }) => (isBooked ? "#bbb" : "#007bff")};
  padding: 10px;
  width: 80px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-align: center;

  &:hover {
    background-color: ${({ isBooked }) => (isBooked ? "#ccc" : "#0056b3")};
  }
`;
