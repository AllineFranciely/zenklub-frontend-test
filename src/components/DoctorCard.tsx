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

  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
`;

const DoctorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 1rem;
    text-align: left;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .info p {
    margin: 0;
    font-size: 1rem;
  }

  .price {
    font-weight: bold;
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  font-style: italic;
  color: #555;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 5px;
    padding-top: 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
