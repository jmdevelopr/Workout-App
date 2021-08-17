import React, { ChangeEvent, ReactElement, useState } from 'react';
import InputStyled from './InputStyled';

interface IInput {
  value: string | number;
  type?: string;
}

export default function Input({ value: text, type }: IInput): ReactElement {
  const [value, setValue] = useState(text);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputStyled type={type} maxLength={15} value={value} onChange={handleOnChange} />;
}

Input.defaultProps = {
  type: 'text',
};
