import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; email: string; phone?: string }) => void;
}

const ScheduleModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <Form onSubmit={handleSubmit}>
        <h2>Schedule Your Appointment</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone (Optional):
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Confirm</button>
      </Form>
    </Modal>
  );
};

export default ScheduleModal;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
