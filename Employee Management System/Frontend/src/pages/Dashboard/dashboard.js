import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect( () =>{
    const fetchEmployees = async () => {
      try {
        const response= await fetch("http://localhost:8080/ems/employees");
        const data= await response.json();

        setEmployees(data);
      } catch (error) {
        console.error("ERROR:", error.message);
      }
    }
    fetchEmployees();
  },[]);

  const handleDelete = async (employeeId) => {
    try {
      // FIX 1: Use backticks (`) for template literal and fix http:// URL
      const response = await fetch(`http://localhost:8080/ems/employee/${employeeId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // FIX 2: Return the filtered array to update state
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
        console.log(`EMPLOYEE DELETED WITH ID ${employeeId}`);
      }
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  const handleUpdate = (employeeId) =>{
navigate(`/employee/${employeeId}`);  }
  return (
   <>
    <Container className='mt-5'>
         <Row>
            <Col>
              
              <h1 className='text-center'>Employee</h1>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                  <tbody>
                    {employees.map((employee) =>(
                      <tr key={employee.id}>
                          <td>{employee.name}</td>
                          <td>{employee.email}</td>
                          <td>{employee.department}</td>
                          <td>{employee.phoneNo}</td>
                          <td>
                            <Button variant='outline-secondary' onClick={()=> handleUpdate(employee.id)}>
                              Update
                            </Button>{" "}
                            <Button variant='outline-danger' onClick={()=> handleDelete(employee.id)}>
                              Delete
                            </Button>
                          </td>
                      </tr>
                    ))}
                  </tbody>
              </Table>
            </Col>
         </Row>
    </Container>
   </>
  )
}

export default Dashboard;
