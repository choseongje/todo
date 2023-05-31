import React from "react";
import styled from "styled-components";
import { Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import {StyledEngineProvider} from "@mui/styled-engine";

const MySelect = styled(Select)`
    border-radius: 3px;
    color:black;
    width:80px;
    height:45px;
    margin:3px;
`

const MyFormField = styled(FormControlLabel)`
    border-radius: 3px;
    background-color: pink;
    color:black;
    width:250px;
    height:50px;
    margin:3px;
`

function DoneItem({item, removeDone, setTag}){

    const handleChange = (e) => {
      setTag(item.id,e.target.value);
    };

    return(
        <div>
            <StyledEngineProvider injectFirst>
                <MyFormField
                    control={<Checkbox checked={true} color="error"/>}
                    label={item.name}
                    onChange={() => removeDone(item.id)}
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

export default DoneItem;