import styles from "./ThemeSwicher.module.scss";
import LightIcon from "../../../shared/assets/icons/theme-light.svg";
import DarkIcon from "../../../shared/assets/icons/theme-dark.svg";
import { memo } from "react";
import { useTheme } from "../../../app/providers/ThemeProbider/lib/useTheme";
import { Theme } from "../../../app/providers/ThemeProbider/lib/ThemeContext";
import { Button, ThemeButton } from "../../../shared/ui/Button/Button";
import { classNames } from "../../../shared/classNames/classNames";

interface ThemeSwicherProps {
  className?: string;
}

export const ThemeSwicher = memo(({ className }: ThemeSwicherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.themeSwicher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});

ThemeSwicher.displayName = "ThemeSwicher";
