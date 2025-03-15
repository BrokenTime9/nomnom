import {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  Dispatch,
  SetStateAction,
} from "react";

//base input
interface BaseInputProps {
  name: string;
  placeholder: string;
  value: string;
  callback?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

//input props
export type InputProps = BaseInputProps & InputHTMLAttributes<HTMLInputElement>;
export type TextAreaProps = BaseInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

//setter function
export type StateSetter<T> = Dispatch<SetStateAction<T>>;
