import React from "react";
import { render, screen } from "@testing-library/react";
import DoctorCard from "../components/DoctorCard"; // Ajuste o caminho para seu projeto
import { TextEncoder, TextDecoder } from "util";

// Adicionando o polyfill para garantir que o Jest consiga usar TextEncoder e TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock para o médico
const mockDoctor = {
  id: "1",
  name: "Dr. João Silva",
  specialty: "Psicologia",
  location: "São Paulo",
  reviews: 20,
  price: 200,
};

describe("DoctorCard Component", () => {
  it("renders doctor's details", () => {
    render(<DoctorCard doctor={mockDoctor} />);

    // Verifica se o nome do médico aparece
    expect(screen.getByText("Dr. João Silva")).toBeInTheDocument();

    // Verifica se a especialidade e a localização aparecem
    expect(screen.getByText("Psicologia")).toBeInTheDocument();
    expect(screen.getByText(/20 reviews/i)).toBeInTheDocument();
  });
});
