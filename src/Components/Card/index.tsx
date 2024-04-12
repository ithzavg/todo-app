import React from "react";
import Button from "../Button";
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import {removeOne} from '../../Store/dataReducer';

interface ICard {
    id: string;
    title: string;
    description: string;
}

const Card: React.FC<ICard> = ({id, title, description}) => {
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(removeOne(id));
    }

    return(
        <section className="card" id={id}>
            <section className="card__section">
                <input type="checkbox" />
                <div className="card__section-text">
                    <span className="card__section-title">{title}</span>
                    <span className="card__section-description">{description}</span>
                </div>
            </section>
            <Button styleClass="button--delete" onClick={handleDelete} title="Delete"/>
        </section>
    )
}

export default Card;