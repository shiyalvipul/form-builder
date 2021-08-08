import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import * as actionTypes from '../redux/actionTypes';
import QuestionModal from '../QuestionModal';



const BuildForm = (props) => {
    const history = useHistory();
    const[formTitle, setFormTitle] = useState('');
    const formData = useSelector((state) => state.form.formData);
    const dispatch = useDispatch();
    const [showModal, setShowModal] =  useState(false);
    const [error, setError] =  useState(false);


    useEffect(() => {
        dispatch({type: actionTypes.CLEAR_STATE, payload: '' });
    }, [])
    const handleToggle = () => {
        setShowModal(false);
    }
    const handleformInfo = () => {
        if( formTitle.length > 0) {
            let formDate = {
                'title': formTitle ,
                'slug': Math.random().toString(36).substr(2, 9),
                'createdAt': new Date().toLocaleString(),
            }
            dispatch({type: actionTypes.ADD_FORM_TITLE, payload: formDate });
            setShowModal(true);
        } else {
            setError(true);
        }
    }
    const handleSubmit = () => {
        let getForm = JSON.parse(localStorage.getItem('formData')) || [];
        getForm.push(formData);
        localStorage.setItem('formData', JSON.stringify(getForm));
        history.push(`/form-list`);
    }
    return (
        <Container className="p-3" style={{width:'50%'}}>
            <h3 className="header">Welcome To Dynamic Form Build</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Form title" onChange={(e) => [setFormTitle(e.target.value), setError(false)]} />
                    { error && <p style={{color:'red'}}> *Form title is required </p> }
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button variant="outline-primary" type="button" onClick={() => handleformInfo()}>
                        Add Question    
                    </Button>   
                    <Button variant="outline-primary" type="button" onClick={() => handleSubmit()}>
                        Save  
                    </Button>
                </div>   
            </Form>
            { showModal && <QuestionModal show={showModal} handleClose={handleToggle} />}
        </Container>
    )
}
export default BuildForm;