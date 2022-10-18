import React from 'react';
import { Routes,Route,Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from './components/AddEmployee.jsx'
import EmployeeDataTable from './components/EmployeeDataTable.jsx'
import EditEmployess from './components/EditEmployess.jsx'

function App() {

  return (

    <div  class="container card mb-4 box-shadow">

        <div class="card-header">
            <h4 class="my-0 font-weight-normal">TechGeekNext React Crud Example</h4>
          </div>

    <Routes>
        <Route path="/" element={<Navigate to="/read" />} />
        <Route exact path="/create" element={<AddEmployee />}/>
        <Route exact path="/read" element={<EmployeeDataTable />}/>
        <Route path="/edit/:id" element={<EditEmployess />}/>
      </Routes>

    </div>
  );
}

export default App;