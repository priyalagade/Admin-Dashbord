import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

function Home (){
    const location=useLocation()
    const [f_id,setF_id]=useState('')
    const [f_img,setF_img]=useState('')
    const [f_name,setF_name]=useState('')
    const [f_email,setF_email]=useState('')
    const [f_mobile,setF_mobile]=useState('')
    const [f_designation,setF_designation]=useState('')
    const [f_gender,setF_gender]=useState('')
    const [f_course,setF_course]=useState('')
    const [f_createdate,setF_createdate]=useState('')

    
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/emps')
          .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

      return (
        <div >
          <div ><button
              onClick={() => setShowType('table')}>
              Table
            </button>
            <button onClick={() => setShowType('card')}>
              Card
            </button>
          </div>
          <div ><h1 >Employees List</h1>
            <Link to='/emps/create'><MdOutlineAddBox /> </Link>
          </div>
          {loading ? (
            <Spinner />
          ) : showType === 'table' ? (
            <BooksTable emps={emps} />
          ) : (
            <BooksCard emps={emps} />
          )}
        </div>
      );
    };
    
    export default Home;

    