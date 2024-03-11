import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
    const [f_img,setF_img]=useState('')
    const [f_name,setF_name]=useState('')
    const [f_email,setF_email]=useState('')
    const [f_mobile,setF_mobile]=useState('')
    const [f_designation,setF_designation]=useState('')
    const [f_gender,setF_gender]=useState('')
    const [f_course,setF_course]=useState('')


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/emps/${id}`)
    .then((response) => {
        setF_img(response.data.setF_img);
        setF_name(response.data.setF_name);
        setF_email(response.data.setF_email);
        setF_mobile(response.data.setF_mobile);
        setF_designation(response.data.setF_designation);
        setF_gender(response.data.setF_gender);
        setF_course(response.data.setF_course);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEdit = () => {
    const data = {
        f_img,f_name,f_email,f_mobile,f_designation,f_gender,f_course
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/emps/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('employee Edited successfully', { variant: 'success' });
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
      <h1 >Edit Employee</h1>
      {loading ? <Spinner /> : ''}
      <div >
        <div >
          <label >name</label>
          <input
            value={f_name}
            onChange={(e) => setF_name(e.target.value)}
            
          />
        </div>

        <div >
          <label >img</label>
          <input
            value={f_img}
            onChange={(e) => setF_img(e.target.value)}
          />
        </div >

        <div >
          <label >email</label>
          <input
            value={f_email}
            onChange={(e) => setF_email(e.target.value)}
          />
        </div>

        <div >
          <label >mobile no</label>
          <input
            value={f_mobile}
            onChange={(e) => setF_mobile(e.target.value)}
          />
        </div>

        <div >
          <label >designation</label>
          <input
            value={f_designation}
            onChange={(e) => setF_designation(e.target.value)}
          />
        </div>

        <div >
          <label >gender</label>
          <input
            value={f_gender}
            onChange={(e) => setF_gender(e.target.value)}
          />
        </div>

        <div >
          <label >course</label>
          <input
            value={f_course}
            onChange={(e) => setF_course(e.target.value)}
          />
        </div>

        
        <button  onClick={handleEdit}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditEmp