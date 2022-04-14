/// <reference types="react" />
export interface IButton {
    children: string;
    size: "Default" | "Medium" | "Large" | "XLarge";
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}
declare const Button: ({ children, size, disabled, loading, onClick }: IButton) => JSX.Element;
export default Button;
