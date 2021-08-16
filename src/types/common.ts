import React, { Dispatch, SetStateAction } from 'react';

export type TObject<T = string> = { [key: string]: T };
export type TNullable<T> = T | null;
export type TChildren = React.ReactNode;
export type TSetState<T> = Dispatch<SetStateAction<T>>;
