import { useTheme } from "./providers/ThemeProbider/lib/useTheme";
import { classNames } from "../shared/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
