import React, { ChangeEvent, ReactElement, useState } from 'react';
import InputStyled, { IInputStyled } from './InputStyled';

interface IInput extends IInputStyled {
  value: string | number;
}

export default function Input({ value: text, type, background, header, width }: IInput): ReactElement {
  const [value, setValue] = useState(text);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputStyled
      type={type}
      maxLength={15}
      value={value}
      onChange={handleOnChange}
      background={background}
      header={header}
      width={width}
    />
  );
}
