import { Link, Route, Routes } from "react-router";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProbider/lib/useTheme";
import { classNames } from "../shared/classNames/classNames";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
