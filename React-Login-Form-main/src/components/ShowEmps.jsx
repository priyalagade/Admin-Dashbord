import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowEmps = () => {
  const [emps, setEmps] = useState({});
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div >
      <BackButton /><h1 >Show Employees</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div ><div >
            <span >id</span> 
            <span>{emps.f_id}</span>
          </div>
          <div >
            <span >img</span> 
            <span>{emps.f_img}</span>
          </div>
          <div >
            <span >name</span> 
            <span>{emps.f_name}</span>
          </div>
          <div >
            <span >email</span> 
            <span>{emps.f_email}</span>
          </div>
          <div >
            <span >mobile</span> 
            <span>{emps.f_mobile}</span>
          </div>
          <div >
            <span >designation</span> 
            <span>{emps.f_designation}</span>
          </div>
          <div >
            <span >gender</span> 
            <span>{emps.f_gender}</span>
          </div>
          <div >
            <span >course</span> 
            <span>{emps.f_course}</span>
          </div>
          
          


          <div >
            <span >Create Time</span>
            <span>{new Date(emps.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(emps.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEmps;