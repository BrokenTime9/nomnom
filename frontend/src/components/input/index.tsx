import { FC } from "react";
import { InputProps, TextAreaProps } from "@/types";

const Input: FC<InputProps> = ({ callback, ...rest }) => {
  return <input {...rest} onChange={callback} />;
};

const Textarea: FC<TextAreaProps> = ({ callback, ...rest }) => {
  return <textarea {...rest} onChange={callback} />;
};

// Export Both Components
export { Input, Textarea };
