import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Myfavourite from "../Myfavourite"; // importo mi componente CustomButton
describe("CustomButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<Myfavourite color={"primary"}  />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});