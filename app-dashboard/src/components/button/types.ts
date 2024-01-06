import { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
