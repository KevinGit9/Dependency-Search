import React, { ButtonHTMLAttributes } from "react";

// ButtonHTMLAttributes<HTMLButtonElement> allows us to pass any valid button props to the Button component, such as onClick, disabled, type, etc.. 
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button className="button" {...rest}>
            {children}
        </button>
    );
};

export default Button;