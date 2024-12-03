import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Schedule from "../components/Schedule";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

const mockDoctor = {
  id: "1",
  name: "Dr. João Silva",
  schedule: [
    {
      date: "2024-12-03",
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

    expect(screen.getByText("Agende sua sessão")).toBeInTheDocument();

    expect(screen.getByText("12/3/2024")).toBeInTheDocument();
  });

  it("renders available and booked appointments", () => {
    render(<Schedule doctor={mockDoctor} />);

    expect(screen.getByText("08:00")).toBeInTheDocument();
    expect(screen.getByText("09:00")).toBeInTheDocument();

    const availableSlot = screen.getByText("08:00");
    expect(availableSlot).not.toBeDisabled();

    const bookedSlot = screen.getByText("09:00");
    expect(bookedSlot).toBeDisabled();
  });
});
