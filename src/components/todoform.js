import { configure } from '@testing-library/react';
import React,{useState} from 'react';
import {v4} from 'uuid';
import Todolist from './todolist'
import {Container,TextField,Button,Grid,Card} from '@material-ui/core';


 const  Todoform = () => {

    const [notes,setNotes]= useState("");
        const [todos,setTodos]=useState([
        {
          id:1,
          title:"exercise",
          date:'28 Dec 2020 3:23',
          completed:true
        },
        {
          id:2,
          title:"Assignment",
          date:'29 Dec 2020 11:59',
          completed:false
        }
      ]);

    const addtodo = () => {
        const newnotes={
            id:v4(),
            title:notes,
            date:new Date(),
            completed:false
        }
        setTodos([...todos,newnotes]);
    };

    const checktodo = (id) => {
        console.log(id);
        setTodos(
            todos.map((todo) =>{
                if(todo.id === id) todo.completed = !todo.completed;
                console.log(todo.completed);
                return todo;
            })
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addtodo();
        setNotes("");
    }

    const deletetodos = (id) => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    
        
    return(
        <div>

        <Container maxwidth='sm'>
        <Card variant='outlined' style={{width:'40%',marginTop:'20px',marginLeft: 'auto',marginRight:'auto',background:'#e062d0'}}>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                <form 
                onSubmit={handleSubmit}
                style={{ display: 'flex',  justifyContent: 'center',  alignItems: 'center' }}>
                    <Grid item xs={12} sm={6} style={{margin:10}}>
                    <TextField placeholder="Enter Note" multiline variant='filled' required={true}
                                value={notes}onChange={(e)=>setNotes(e.target.value)} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="primary" type="submit" style={{marginLeft:'20px'}} >ADD</Button>
                    </Grid>
                </form>
            </Grid>
            </Card>
        </Container>
          <Todolist todos={todos} deletetodos={deletetodos} checktodo={checktodo} />  
        
        </div>
        
        
    )
}

export default Todoform;