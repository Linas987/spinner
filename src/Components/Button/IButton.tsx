import { MouseEventHandler } from "react";

export interface ButtonParams {
    type: string;
    title: string;
    disable?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}