import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { Tooltip } from "@material-ui/core";
import Clock from 'react-digital-clock';

const ToDoList = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1)
    }

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            alert('Sorry! Zero limit reached.');
            setNum(0);
        }
    }

    return (
        <>
            <div className="main2">
                <div className="center_div2">
                    <h3><Clock /></h3>
                    <h1 className="numberDe">{num}</h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                            <Button className="btn1" onClick={incNum}>
                                <AddIcon />
                            </Button>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <Button className="btn2" onClick={decNum}>
                                <DeleteIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ToDoList;