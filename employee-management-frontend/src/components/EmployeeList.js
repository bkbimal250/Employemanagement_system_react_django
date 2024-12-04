import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get('http://127.0.0.1:8000/api/employees/')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      axios.delete(`http://127.0.0.1:8000/api/employees/${id}/`)
        .then(() => {
          alert('Employee deleted successfully!');
          fetchEmployees(); // Refresh the list after deletion
        })
        .catch(error => console.error('Error deleting employee:', error));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.department.name}
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
