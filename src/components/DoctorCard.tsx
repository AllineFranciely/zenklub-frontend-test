import React from "react";
import styled from "styled-components";

const DoctorCard = ({ doctor, onClick }: any) => {
  return (
    <Card onClick={onClick}>
      <InfoContainer>
        <ImageContainer>
          <DoctorImage src={`/images/${doctor.photo}`} alt={doctor.name} />
        </ImageContainer>

        <DetailsContainer>
          <h3>{doctor.name}</h3>
          <p><strong>{doctor.specialty}</strong> | {doctor.location}</p>
          <p>{doctor.reviews} reviews</p>
          <p>R${doctor.price}</p>
        </DetailsContainer>
      </InfoContainer>

      <DescriptionContainer>
        <p>{doctor.description}</p>
      </DescriptionContainer>
    </Card>
  );
};

export default DoctorCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 100%;
  max-width: 900px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
`;

const DoctorImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
`;

const DescriptionContainer = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  font-style: italic;
  color: #555;
`;
