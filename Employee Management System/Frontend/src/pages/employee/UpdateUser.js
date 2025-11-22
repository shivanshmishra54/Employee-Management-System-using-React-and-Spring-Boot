import React, { useEffect, useState } from 'react'; // Consolidated imports
import './UpdateUser.css';
import { Button, Form } from 'react-bootstrap'; // FIX 1: Correct import source
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        phoneNo: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/ems/employee/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching employee:", error.message);
            }
        }
        // FIX 2: Call the function and add dependency array
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/ems/employee/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("User Updated:", data);
            navigate(`/`);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className='center-form'>
            <h1>Edit Employee</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicName'>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder='Enter Name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder='Enter Email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicDepartment'>
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder='Enter Department'
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicPhone'>
                    <Form.Control
                        type="text"
                        name="phoneNo"
                        placeholder='Enter Phone'
                        value={formData.phoneNo}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Edit Employee
                </Button>
            </Form>
        </div>
    );
}

export default UpdateUser;