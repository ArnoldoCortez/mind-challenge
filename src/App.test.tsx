import { screen } from "@testing-library/react";

import App from "./App";
import { renderWithProviders } from "./test/test-utils";

describe("App", () => {
  it("handles good response", async () => {
    renderWithProviders(<App />);

    const heading = screen.getByRole("heading", { name: /Main Content/i });

    expect(heading).toBeInTheDocument();
  });
});
