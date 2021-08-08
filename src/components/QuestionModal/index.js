import React, { useState } from 'react';
import PropTypes from 'prop-types';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actionTypes';

const QuestionModal = ({ show, handleClose, }) => {
    const dispatch = useDispatch();
    const[selectType, setSelectType] = useState('Text');
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState('');
    const [error, setError] =  useState(false);
    
    const handleAddQuestion = () => {
        if(question.length > 0) {
            let questionData = [
                {
                "questionTitle": question,
                "selectType": selectType,
                "choices": choices
                }
            ];
            dispatch({type: actionTypes.ADD_FORM_QUESTION, payload: questionData  });
            handleClose();
        } else {
            setError(true)
        }
     
    }
    return (
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Form Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Control type="text" placeholder="Question / Title" onChange={(e) => [setQuestion(e.target.value), setError(false)]} />
                        { error && <p style={{color:'red'}}> *Question title is required </p> }
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-3" controlId="formGridState">
                        <Form.Label>Select Type</Form.Label>
                        <Form.Select defaultValue="Text" onChange={(e) => setSelectType(e.target.value)}>
                            <option>Text</option>
                            <option>Multichoice</option>
                            <option>Single Select</option>
                        </Form.Select>
                    </Form.Group>
                    {(selectType === 'Multichoice' || selectType === 'Single Select') && <FloatingLabel controlId="floatingTextarea1" label="Enter Choice Option in Sepateline">
                            <Form.Control as="textarea" style={{ height: '120px' }} onChange={(e) => setChoices((e.target.value).split(/\n/))}/> 
                        </FloatingLabel>
                        }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={handleAddQuestion}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
QuestionModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
}
export default QuestionModal;