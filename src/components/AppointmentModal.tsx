import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    minWidth: "300px",
    maxHeight: "400px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 10,
  },
};

const AppointmentModal = ({ isOpen, onRequestClose, onSave, selectedTime }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (name && email) {
      onSave(name, email, selectedTime); 
      setMessage("Agendado com sucesso!");
    } else {
      setMessage("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Agendar Consulta" style={modalStyles}>
      <h2>Agende sua consulta</h2>
      <Form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Button onClick={handleSave}>Salvar</Button>
          <Button onClick={onRequestClose}>Cancelar</Button>
        </div>
      </Form>
      {message && <Message>{message}</Message>}
    </Modal>
  );
};

export default AppointmentModal;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  label {
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 15px;
    maxHeight: "40vh",
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Message = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
