import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import DanielGC from "../DanielGC"; // importo mi componente CustomButton
describe("DanielGC rating", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<DanielGC defval = {3} precision = {0.5} maxrating = {10} color = 'primary' />);
        const rating = screen.getByLabelText("custom rating");
        expect(rating).toBeInTheDocument();
    });
});