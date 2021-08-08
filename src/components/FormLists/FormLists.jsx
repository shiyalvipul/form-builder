import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';


const FormLists = () => {
    const history = useHistory();
    const [forms, setForms] = useState([]);

    useEffect( () => {
        let getForm = JSON.parse(localStorage.getItem('formData')) || [];
        setForms(getForm);
    },  []);

    const handleFormURL = (slug) => {
        history.push(`/form/${slug}`)
    }

    return (
        <Container className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Form Name</th>
                        <th>Form URL</th>
                        <th>Created At</th>
                        <th>Total Responeses</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        forms.map((form, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{form.title}</td>
                                <td onClick={() => handleFormURL(form.slug)} style={{color:'blue', cursor:'pointer'}}>{form.slug}</td>
                                <td>{form.createdAt}</td>
                                <td>-</td>
                            </tr>
                        ))
                    }
                </tbody>
                </Table>
        </Container>
    )
}
export default FormLists;