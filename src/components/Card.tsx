import React from "react";

interface IProps {
  children: any;
  className?: string;
}

const Card = (props: IProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
