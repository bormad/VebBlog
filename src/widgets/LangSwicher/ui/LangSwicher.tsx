import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/classNames/classNames";
import styles from "./LangSwicher.module.scss";
import {
  Button,
  ButtonSize,
  ThemeButton,
} from "../../../shared/ui/Button/Button";

interface LangSwicherProps {
  className?: string;
}

export const LangSwicher = (props: LangSwicherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      onClick={toggle}
      className={classNames(styles.LangSwicher, {}, [className])}
      theme={ThemeButton.CLEAR}
      size={ButtonSize.L}
    >
      {t("Language")}
    </Button>
  );
};
