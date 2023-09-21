import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="col-sm">
                    <label for="name">Cost</label>
                    <input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="cost" 
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Button type="submit" className="btn btn-primary mt-3">Save</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;