import { ButtonProps } from "../types/interfaces";

const Button = ({ buttonText, buttonSize, buttonStyleType }: ButtonProps) => {
  const getButtonClassName = () => {
    if (buttonStyleType === "custom") {
      return `w-full bg-lightPurple hover:bg-seaGreen hover:text-lightPurple text-seaGreen font-semibold text-lg py-3 rounded-xl`;
    }
    // Default style
    return `hover:bg-seaGreen hover:text-white hover:border-transparent font-bold border-2 border-black py-2 rounded-xl truncate [@media(max-width:821px)]:px-4 [@media(max-width:821px)]:text-xs ${
      buttonSize ? "px-4" : "px-8"
    }`;
  };

  return <button className={getButtonClassName()}>{buttonText}</button>;
};

export default Button;
