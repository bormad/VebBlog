import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./app/styles/index.scss";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProbider";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
