import React, { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
interface IButton extends ButtonProps {
    children: ReactNode;
}
export declare const Button: React.FC<IButton>;
export {};
