import { rest } from "msw";
import { mockUsersResponse } from "./data";

const API_URL = import.meta.env.VITE_API_URL;

const handlers = [
  rest.get(`${API_URL}users`, (_req, res, ctx) => {
    return res(ctx.json(mockUsersResponse));
  }),
];

export { handlers };
