import { describe, it, expect } from "vitest";

// import App from "./App";
import {
  RouterProvider,
  createMemoryRouter,
  BrowserRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
// import routesConfig from "./routes";
import "@testing-library/jest-dom";
import { About } from "./pages";
import App2 from "./App2";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("Renders the About component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const text = getByText(/about page/i);
    expect(text).toBeInTheDocument();
  });

  it("loads simple BrowserRouter page", () => {
    render(<App2 />);
  });
  // it("application loads", () => {
  //   const router = createMemoryRouter(routesConfig, {
  //     initialEntries: ["/"],
  //   });

  //   render(<RouterProvider router={router} />);
  // });
});
