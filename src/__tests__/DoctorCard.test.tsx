import React from "react";
import { render, screen } from "@testing-library/react";
import DoctorCard from "../components/DoctorCard";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

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

    expect(screen.getByText("Dr. João Silva")).toBeInTheDocument();

    expect(screen.getByText("Psicologia")).toBeInTheDocument();
    expect(screen.getByText(/20 reviews/i)).toBeInTheDocument();
  });
});
