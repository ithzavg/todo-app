import React from "react";
import Button from "../Button";
import './styles.css';

interface ICard {
    title: string;
    description: string;
}

const Card: React.FC<ICard> = ({title, description}) => {
    const handleDelete = () =>{

    }

    return(
        <section className="card">
            <section className="card__section">
                <input type="checkbox" />
                <p className="card__section-title">{title}</p>
                <p className="card__section-description">{description}</p>
            </section>
            
            

            <Button styleClass="button--delete" onClick={handleDelete} title="Delete"/>

        </section>
    )
}

export default Card;