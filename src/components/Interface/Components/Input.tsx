import { FC, HTMLInputTypeAttribute } from "react";

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input: FC<Props> = ({ type, placeholder }) => {
  return (
    <input
      className="w-full py-1 px-3 my-1 rounded-lg bg-neutral-200/60 font-normal text-neutral-800 outline-none focus:bg-neutral-300/75 ease-in-out transition-colors"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
