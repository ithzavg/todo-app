import React from "react";
import './styles.css';

interface IButton {
    title: string;
    onClick: () => void;
    styleClass: string;
}

const Button: React.FC<IButton> = ({title, onClick, styleClass}) => {
    return(
        <button className={`${styleClass} button`}  onClick={onClick}>{title}</button>
    )
}

export default Button;