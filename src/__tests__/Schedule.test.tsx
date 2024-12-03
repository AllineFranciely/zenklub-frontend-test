import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Schedule from "../components/Schedule"; // Ajuste o caminho para seu projeto
import { TextEncoder, TextDecoder } from "util";

// Adicionando o polyfill para garantir que o Jest consiga usar TextEncoder e TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock para o médico com horários
const mockDoctor = {
  id: "1",
  name: "Dr. João Silva",
  schedule: [
    {
      date: "2024-12-03", // Data de exemplo no formato ISO
      appointments: [
        { time: "08:00", isBooked: false },
        { time: "09:00", isBooked: true },
      ],
    },
  ],
};

describe("Schedule Component", () => {
  it("renders the schedule and displays the title", () => {
    render(<Schedule doctor={mockDoctor} />);

    // Verifica se o título está presente
    expect(screen.getByText("Agende sua sessão")).toBeInTheDocument();

    // Verifica se a data inicial é exibida corretamente
    expect(screen.getByText("12/3/2024")).toBeInTheDocument();
  });

  it("renders available and booked appointments", () => {
    render(<Schedule doctor={mockDoctor} />);

    // Verifica se os horários aparecem corretamente
    expect(screen.getByText("08:00")).toBeInTheDocument();
    expect(screen.getByText("09:00")).toBeInTheDocument();

    // Verifica se o horário disponível pode ser clicado
    const availableSlot = screen.getByText("08:00");
    expect(availableSlot).not.toBeDisabled();

    // Verifica se o horário já reservado está desativado
    const bookedSlot = screen.getByText("09:00");
    expect(bookedSlot).toBeDisabled();
  });

  it("updates the schedule when an appointment is booked", () => {
    render(<Schedule doctor={mockDoctor} />);

    const availableSlot = screen.getByText("08:00");
    fireEvent.click(availableSlot);

    // Verifica se o horário reservado é desativado após clicar
    expect(availableSlot).toBeDisabled();
  });
});
