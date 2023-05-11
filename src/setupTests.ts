import "@testing-library/jest-dom";
import nodeFetch, { Request, Response, Headers } from "node-fetch";

import { server } from "./test/server";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.fetch = nodeFetch;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Request = Request;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Response = Response;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.Headers = Headers;

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
