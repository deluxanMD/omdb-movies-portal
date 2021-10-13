import React from "react";

interface IProps {
  type: string;
  hint: string;
  value: string;
  onChange: (e: any) => void;
}

const TextInput = (props: IProps) => {
  const { type, hint, value, onChange } = props;

  return (
    <div>
      <input type={type} placeholder={hint} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
