import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import Schedule from "../components/Schedule";
import styled from "styled-components";
import Header from "../components/Header";

const App: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar médicos. Tente novamente mais tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <Container>
          <p>Carregando médicos...</p>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <Container>
          <p>{error}</p>
        </Container>
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div>
        <Header />
        <Container>
          <p>Nenhum médico encontrado. Tente novamente mais tarde.</p>
        </Container>
      </div>
    );
  }

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
