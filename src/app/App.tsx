import { useTheme } from "./providers/ThemeProbider/lib/useTheme";
import { classNames } from "../shared/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";
import { Suspense } from "react";
import { Sidebar } from "../widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
