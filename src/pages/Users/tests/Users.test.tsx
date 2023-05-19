import { cleanup, screen } from "@testing-library/react";
import UsersPage from "..";
import { renderWithProviders } from "../../../test/test-utils";

describe("Users Crud Functionality", () => {
  beforeEach(() => {
    renderWithProviders(<UsersPage />);
  });
  afterEach(cleanup);

  it("Renders Loading while fetching users", () => {
    const loadingText = screen.getByText(/loading/i);

    expect(loadingText).toBeInTheDocument();
  });

  it("Renders User Page", async () => {
    const heading = await screen.findByRole("heading", { name: /Users/i });

    expect(heading).toBeInTheDocument();
  });

  it("Renders a table with 3 rows", async () => {
    const table = await screen.findByRole("table");
    const rows = await screen.findAllByRole("row");

    expect(table).toBeInTheDocument();
    expect(rows).toHaveLength(3);
  });

  it("Renders a table with 6 colum headers", async () => {
    const rows = await screen.findAllByRole("columnheader");

    expect(rows).toHaveLength(6);
  });

  it("Renders the first user data correctly", async () => {
    const firstRowColumns = ["Jhon Doe", "jdoe@arkus.com", "C1", "ReactJs"];
    const cells = await screen.findAllByRole("cell");

    firstRowColumns.forEach((column, idx) => {
      expect(cells[idx].textContent).toBe(column);
    });
  });
});
