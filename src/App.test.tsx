import { screen } from "@testing-library/react";

import App from "./App";
import { renderWithProviders } from "./test/test-utils";

describe("App", () => {
  it("handles good response", async () => {
    renderWithProviders(<App />);

    const heading = screen.getByRole("heading", { name: /Profile/i });

    expect(heading).toBeInTheDocument();
  });
});
