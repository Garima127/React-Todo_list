import React from 'react';
import {Card,CardContent,Typography,Container,IconButton,Button} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

const Tododisplay =  ({title,id,deletetodos,date,checktodo,completed}) => {

    //const deltodo = () => deletetodos(id);
    //const markcomplete=() => checktodo(id);
    let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    function getUserReadableDate(date) {
        let readableDate=new Date(date);
       // 11 NOv 2019 2:30
        return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]
        +' '+readableDate.getFullYear()+' '+readableDate.getHours()+':'
        +readableDate.getMinutes();
    }

    const todosStyle = completed 
        ? {textDecoration : "line-through"}
        : {textDecoration: "none"};

       return (
        <div>
            <Container>
                <Card varient="outlines" style={{marginTop:'35px',background:"Lightgrey"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={todosStyle}>
                            <div style={{float:"left"}}>{getUserReadableDate(date)}</div>
                            
                            {title}
                            <Button style={{float:"right"}} variant="contained" color="secondary" type="submit" onClick={()=>{checktodo(id)}}>Completed</Button>               
                            <IconButton style={{float:"right"}}>
                                <Delete style={{color:"red"}} onClick={()=>{deletetodos(id)}}></Delete>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
} 
export default Tododisplay;