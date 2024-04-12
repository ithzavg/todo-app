import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setAll} from './Store/dataReducer';
import Card from './Components/Card';
import Modal from './Components/Modal';
import todoList from './Mocks/list';

import './App.css';

interface IObject{
  id: string;
  title: string;
  description: string;
  completed: boolean;
}


function App() {
  const dispatch = useDispatch()
  


 useEffect(() => {
  dispatch(setAll(todoList))
 }, [])

 const data = useSelector((state: any) => state.data.todos);
 
  return (
    <div className="App">
      
      <section className='container'>
        <Modal/>
        {data.map((value: IObject) => (
          <Card id={value.id} title={value.title} description={value.description} key={value.id} />
        ))}
      </section>

      
    </div>
  );
}

export default App;
