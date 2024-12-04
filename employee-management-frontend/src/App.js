import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import DepartmentList from './components/DepartmentList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/add-employee">Add Employee</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/add-employee" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
