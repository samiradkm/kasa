import { act, render, screen } from "@testing-library/react";
import Coolaps from "./coolaps";

test("Ouverture du coolaps", () => {
    render(<Coolaps titre="Bonjour" description="Je m'appelle Samira" />);

    const description = screen.getByText("Je m'appelle Samira");
    expect(description).not.toBeVisible;

    const fleche = screen.getByRole("img");

    act(() => {
        fleche.click();
        expect(description).toBeVisible;
    });
});
