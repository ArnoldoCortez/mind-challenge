import { screen, fireEvent } from "@testing-library/react";
import AddUserForm from "../components/AddUserForm";
import { renderWithProviders } from "../../../test/test-utils";

const mockOnSubmit = vi.fn();

describe("AddUserForm", () => {
  it("should be 2 invalid inputs when submiting without filling form", async () => {
    renderWithProviders(<AddUserForm onSubmit={mockOnSubmit} />);

    fireEvent.submit(screen.getByRole("button"));

    const inputs = await screen.findAllByRole("textbox");

    const invalidInputs = inputs.filter(
      (input) => input?.getAttribute("aria-invalid") === "true"
    );

    expect(invalidInputs).toHaveLength(2);
    expect(mockOnSubmit).not.toBeCalled();
  });

  it("should display 'Provide a valid email format' when email input is invalid", async () => {
    renderWithProviders(<AddUserForm onSubmit={mockOnSubmit} />);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    fireEvent.input(emailInput, {
      target: {
        value: "invalid email",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    await screen.findByText("Provide a valid email format");
  });
});
