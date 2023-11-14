import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home page", () => {
  it("should render the Home page", () => {
    render(<Home />);

    expect(screen.getByText("Início")).toBeVisible();
  });
});
