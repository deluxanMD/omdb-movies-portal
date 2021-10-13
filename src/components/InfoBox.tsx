import React from "react";

interface IProps {
  info: string;
  variant: string;
}

const InfoBox = (props: IProps) => {
  const { info, variant } = props;

  return (
    <div className={`${variant === "info" ? "info" : "error"}-box`}>{info}</div>
  );
};

export default InfoBox;
