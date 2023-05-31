import React from "react";
import styled from "styled-components";
import { Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import {StyledEngineProvider} from "@mui/styled-engine";


const MyFormField = styled(FormControlLabel)`
    border-radius: 3px;
    box-shadow: 0 3px 4px 2px pink;
    color:black;
    width:250px;
    height:50px;
    margin:3px;
`
const MySelect = styled(Select)`
    border-radius: 3px;
    color:black;
    width:80px;
    height:45px;
    margin:3px;
`


function TodoItem({item, getCompleted, setTag}){

    const handleChange = (e) => {
      setTag(item.id,e.target.value);
    };

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <MyFormField
                    control={<Checkbox checked={false}/>}
                    label={item.name}
                    onChange={() => getCompleted(item.id)}
                />
                <MySelect
                    defaultValue={""}
                    value={item.tag}
                    onChange={handleChange}
                >
                    <MenuItem value="과제">과제</MenuItem>
                    <MenuItem value="운동">운동</MenuItem>
                    <MenuItem value="수업">수업</MenuItem>
                </MySelect>
            </StyledEngineProvider>
        </div>
    )
}

export default TodoItem;