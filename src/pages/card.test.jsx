import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("Afficher titre", () => {
    render(<Card titre="Bonjour"></Card>);
    const divBonjour = screen.getByText("Bonjour");
    expect(divBonjour).toBeTruthy();
});
