import React from "react";
import styled from "styled-components";

const DoctorCard = ({ doctor, onClick }: any) => {
  const totalReviews = doctor.reviews || 0;
  const fullStars = Math.min(Math.floor(totalReviews / 5), 5);
  const emptyStars = 5 - fullStars; 

  return (
    <Card onClick={onClick}>
      <InfoContainer>
        <ImageContainer>
          <DoctorImage src={`/images/${doctor.photo}`} alt={doctor.name} />
        </ImageContainer>
        <DetailsContainer>
          <h3>{doctor.name}</h3>
          <div className="info">
            <p><strong>{doctor.specialty}</strong> | {doctor.location}</p>
            <div>
              <span>{Array(fullStars).fill("⭐").join("")}</span>
              <span>{Array(emptyStars).fill("☆").join("")} {doctor.reviews} reviews</span>
            </div>
            <p className="price">R${doctor.price} / {doctor.time} MINUTES</p>
          </div>
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-wrap: wrap;
  }

  .info p {
    margin: 0;
  }

  .price {
    font-weight: bold;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  font-style: italic;
  color: #555;
`;
