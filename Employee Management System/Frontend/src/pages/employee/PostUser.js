import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // Fixed import
import "./PostUser.css";
import { useNavigate } from 'react-router-dom';

const PostUser = () => {
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

    const navigate = useNavigate();

    // Added submit handler
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log("Submitting Employee Data:", formData);
        
        try {
          const response= await fetch("http://localhost:8080/ems/add",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(formData)
          });

          const data=await response.json()
          console.log("Employee Created: ",data)
          navigate("/")
        } catch (error) {
          console.log("ERROR :", error.message);
        }
    };

    return (
      <>
        <div className='center-form'>
            <h1>Post Employee</h1>
            {/* Added onSubmit to Form */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicName'>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder='Enter Name'
                        value={formData.name} // Fixed value binding
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'> {/* Changed ID */}
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder='Enter Email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicDepartment'> {/* Changed ID */}
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder='Enter Department'
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicPhone'> {/* Changed ID */}
                    <Form.Control
                        type="text"
                        name="phoneNo" // Fixed name attribute to match state
                        placeholder='Enter Phone'
                        value={formData.phoneNo}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Add Employee
                </Button>
            </Form>
        
        </div>
        </>
    );
};

export default PostUser;