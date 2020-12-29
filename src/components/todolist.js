import { configure } from '@testing-library/react';
import React from 'react';
import Tododisplay from './display';

const Todolist =  ({ todos , deletetodos,checktodo }) => {

       return (
        <div>
            {todos.map(todo=>(
                <Tododisplay 
                    key={todo.id} 
                    title={todo.title} 
                    id={todo.id} 
                    date={todo.date}
                    deletetodos={deletetodos}
                    checktodo={checktodo}
                    completed={todo.completed}
                />
            ))}
            
        </div>
    )
} 
export default Todolist;