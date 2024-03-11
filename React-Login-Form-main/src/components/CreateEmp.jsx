import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
    const [f_id,setF_id]=useState('')
    const [f_img,setF_img]=useState('')
    const [f_name,setF_name]=useState('')
    const [f_email,setF_email]=useState('')
    const [f_mobile,setF_mobile]=useState('')
    const [f_designation,setF_designation]=useState('')
    const [f_gender,setF_gender]=useState('')
    const [f_course,setF_course]=useState('')
   

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handle = () => {
    const data = {
        f_id,f_img,f_name,f_email,f_mobile,f_designation,f_gender,f_course
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('emp Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create emp</h1>
      {loading ? <Spinner /> : ''}


      <div className="employees">
            <div div>
                <input type="text" onChange={(e) => {setF_id(e.target.value) }} placeholder="Employee id"  />
                <input type="image" onChange={(e) => {setF_img(e.target.value) }} placeholder="image"  />
                <input type="text" onChange={(e) => {setF_name(e.target.value) }} placeholder="name"  />
                <input type="email" onChange={(e) => {setF_email(e.target.value) }} placeholder="Email"  />
                <input type="tel" onChange={(e) => {setF_mobile(e.target.value) }} placeholder="phone no"  />
                <input type="text" onChange={(e) => {setF_designation(e.target.value) }} placeholder="designation"  />
               </div>
                <select onChange={(e) => {setF_designation(e.target.value) }} id="designation" name="designation" class="form-select">
                <option value="HR">HR</option>
                <option value="Maneger">Maneger</option>
                <option value="Sales">Sales</option>
                </select>
                <div onChange={(e) => {setF_gender(e.target.value) }} >
                    <input type="radio" name="gender" value="male"/> Male               
                    <input type="radio" name="gender" value="female"/> Female
                </div>
                <div onChange={(e) => {setF_course(e.target.value) }} >
                  <input type="checkbox" id="Course1" name="Course1" value="MCA"/>MCA
                  <input type="checkbox" id="Course2" name="Course1" value="BSC"/>BSC
                   <input type="checkbox" id="Course3" name="Course1" value="BCA"/>BCA
                </div>
                <div>
                <button className='p-2 bg-sky-300 m-8' onClick={handle}>Save </button>
                </div>
      </div>
    </div>
  );
}

export default CreateEmp