import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { classNames } from "../../../shared/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.notFoundPage, {}, [className])}>
      {t("Page not found")}
    </div>
  );
};
