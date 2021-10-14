import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Buttons = (props: IProps) => {
  const { text, onClick, disabled } = props;

  return (
    <button
      onClick={onClick}
      className={`btn primary-btn ${disabled && "disable-btn"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Buttons;
