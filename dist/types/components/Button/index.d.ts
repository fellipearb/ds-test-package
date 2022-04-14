/// <reference types="react" />
export interface IButton {
    text: string;
    size?: "Default" | "Medium" | "Large" | "XLarge";
    disabled?: boolean;
}
declare const Button: ({ text, size, disabled }: IButton) => JSX.Element;
export default Button;
