import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEmp from './src/components/CreateEmp';
import ShowEmps from './src/components/ShowEmps';
import EditEmp from './src/components/EditEmp';
import DeleteEmp from './src/components/DeleteEmp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateEmp />} />
      <Route path='/books/details/:id' element={<ShowEmps />} />
      <Route path='/books/edit/:id' element={<EditEmp />} />
      <Route path='/books/delete/:id' element={<DeleteEmp />} />
    </Routes>
  );
};

export default App;