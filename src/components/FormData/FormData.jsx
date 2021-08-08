import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';


const FormData = (props) => {
    const[forms, setForm] = useState([]);
    let slug = props.match.params.slug;
    useEffect(() => {
        let getForm = JSON.parse(localStorage.getItem('formData'));
        setForm(getForm);
    },[]);
    
    const handleSendResponse = () => (
        alert("Your Response is Submited Thank You!")
    );

    return (
        <Container className="mt-5">

        <Table striped bordered hover>
            <tbody>
                {forms.map(form => {
                    return (
                        <React.Fragment>
                            {form.slug === slug && 
                                <tr>
                                    <td>{form.title}</td>
                                </tr>
                            }
                        { form.slug === slug && form.questions.map ((quetion, i) =>
                        <React.Fragment key={i}>
                            <tr >
                                <td>Q.{i + 1} {quetion[0].questionTitle}</td>
                            </tr>
                            { quetion[0].selectType === 'Multichoice' &&
                            <tr>
                                <td className="d-flex" style={{gap: '30px'}}> 
                                    {quetion[0].choices.map(choice => (
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check inline type="checkbox" label={choice} />
                                        </Form.Group>
                                    ))}
                                </td>
                                
                            </tr> }
                            {quetion[0].selectType === 'Single Select' &&
                                <tr>
                                <td className="d-flex" style={{gap: '30px'}}> 
                                    {quetion[0].choices.map(choice => (
                                            <Form.Group controlId="formBasicRadio">
                                                <Form.Check inline type="radio" label={choice} id={`radio-${choice}`} />
                                            </Form.Group>
                                    ))}
                                </td>
                                </tr>
                            }
                            {quetion[0].selectType === 'Text' &&
                                <tr>
                                    <td><Form.Control type="text"/></td>
                                </tr>
                            }
                        </React.Fragment>)}
                        </React.Fragment>
                    )
                })}
            </tbody>
        </Table>
        <Button variant="outline-primary" onClick={handleSendResponse}>
            Send Response        
        </Button>
    </Container>
    )
}
export default FormData;