import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import Schedule from "../components/Schedule";
import styled from "styled-components";
import Header from "../components/Header";

const App: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/doctors").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <DoctorAppointments>
          {doctors.map((doctor) => {
            const doctorAppointments = appointments.filter(
              (appointment: any) => appointment.doctorId === doctor.id
            );

            return (
              <DoctorScheduleWrapper key={doctor.id}>
                <DoctorCard doctor={doctor} />
                <Schedule doctor={doctor} appointments={doctorAppointments} />
              </DoctorScheduleWrapper>
            );
          })}
        </DoctorAppointments>
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DoctorAppointments = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const DoctorScheduleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;
