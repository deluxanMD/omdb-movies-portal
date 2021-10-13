import React from "react";

interface IProps {
  info: string;
}

const InfoBox = (props: IProps) => {
  return <div className="info-box">{props.info}</div>;
};

export default InfoBox;
