import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    axios.get('http://127.0.0.1:8000/api/departments/')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error fetching departments:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      axios.delete(`http://127.0.0.1:8000/api/departments/${id}/`)
        .then(() => {
          alert('Department deleted successfully!');
          fetchDepartments(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error('Error deleting department:', error);
          alert('Failed to delete department. Please ensure no employees are associated with this department.');
        });
    }
  };


  return (
    <div>
      <h2>Department List</h2>
      <ul>
        {departments.map(department => (
          <li key={department.id}>
            {department.name}
            <button onClick={() => handleDelete(department.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
