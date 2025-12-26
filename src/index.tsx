import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./app/styles/index.scss";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProbider";

import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/ErrorBoundaries";

const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
