import { Category } from ".";
import { render, screen } from "@testing-library/react";

describe("Category component", () => {
  it("should render the component", () => {
    render(<Category>Tudo</Category>);

    expect(screen.getByText("Tudo")).toBeInTheDocument();
  });
});
