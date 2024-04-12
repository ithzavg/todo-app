import React, { useState } from "react";
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';
import {addOne} from '../../Store/dataReducer';


const Modal: React.FC = () => {
  const [title, setTitle] = useState("Nueva tarea");
  const [description, setDescription] = useState("Descripcion nueva tarea");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  

  const handleClose = () => {
    setShowModal(false);
  }

  const handleOpen = () => {
    setShowModal(true);
}



const handleSubmit = () => {
    
    const payload = {
        "id": Math.floor(Math.random() * 100),
        "title": title,
        "description": description,
        "completed": false
    };

    dispatch(addOne(payload));
    
    setShowModal(false);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <Button title='Add new' onClick={handleOpen} styleClass='button--add'/>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Añadir Elemento</h2>
            <div >
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="descripcion">Description:</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <button onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
