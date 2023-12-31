import React, { useState } from "react";
import style from "./styles.module.scss";

interface IButton {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onSubmit?: () => void;
  handleClick: () => void;
  isActive?: boolean;
  isSmall?: boolean;
}

const MyButton: React.FC<IButton> = ({
  title,
  type,
  onSubmit,
  handleClick,
  isSmall,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true)
  };

  return (
    <button
      className={`${style.button} ${isActive ? style.button__active : ""} ${isSmall && style.button__small}`}
      onClick={() => {
        handleButtonClick()
        handleClick()
      }}
      onSubmit={onSubmit}
      type={type}
    >
      <p className={style.button__title}>{title}</p>
    </button>
  );
};

export { MyButton };
