import { useState } from 'react';

const useEmployeeManagement = (initialData) => {
  const [employeeData, setEmployeeData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (data) => {
    setEmployeeData([...employeeData, data]);
  };

  const updateEmployee = (index, data) => {
    const updatedData = [...employeeData];
    updatedData[index] = data;
    setEmployeeData(updatedData);
    setEditIndex(null);
  };

  const deleteEmployee = (index) => {
    const updatedData = [...employeeData];
    updatedData.splice(index, 1);
    setEmployeeData(updatedData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleView = (index) => {
    setSelectedEmployee(employeeData[index]);
  };

  const handleViewClose = () => {
    setSelectedEmployee(null);
  };

  return {
    employeeData,
    editIndex,
    selectedEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    handleEdit,
    handleView,
    handleViewClose,
  };
};

export default useEmployeeManagement;
