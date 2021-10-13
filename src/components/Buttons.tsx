import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
}

const Buttons = (props: IProps) => {
  const { text, onClick } = props;

  return (
    <button className="btn primary-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
