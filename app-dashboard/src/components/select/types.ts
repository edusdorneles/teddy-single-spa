import { SelectHTMLAttributes } from "react";

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
}
