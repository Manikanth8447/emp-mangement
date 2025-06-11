import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './CreateEmployeeComponent';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/v1/siritek/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRefreshEmployees = () => {
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm refreshEmployees={handleRefreshEmployees} />
      {/* Render the EmployeeList or other components */}
    </div>
  );
}
export default Home