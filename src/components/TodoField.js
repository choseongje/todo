import React, {useState} from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import {StyledEngineProvider} from "@mui/styled-engine";

const StyledTextField = styled(TextField)`
    border-radius : 3px;
    width : 250px;
    & label.mui-focused {
        color: pink;
    }
    & .MuiInputBase-root{
        height: 50px;

        &.Mui-focused fieldset{
            border: none;
            box-shadow: 0 3px 5px 2px rgba(255,105,135,0.3);
        }
    }
`

const StyledButton = styled(Button)`
    background: pink;
    width : 80px;
    height : 50px;
    margin : 0 0 0 10px ;
    padding : 0 30px;
    border-radius : 3px;
    &:hover {
        background: pink;
    }
`


function TodoField({ addTodo }){
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
       setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo, false, "");
        setTodo("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <StyledEngineProvider injectFirst>
                <StyledTextField label="Todo" value={todo} onChange={handleChange} />
                <StyledButton variant="contained" onClick={handleSubmit}>Add</StyledButton>
            </StyledEngineProvider>
        </form>
    )
}

export default TodoField;