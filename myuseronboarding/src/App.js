// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Route } from 'react-router-dom';
import axios from 'axios';

import schema from './Components/Schema';
import Form from './Components/Form';
import Users from './Components/Users';

const initialValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  title:'',
  terms: false
}

const initialErrors = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  title:'',
}


function App() {

  const [user, setUser] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)


  const newUserForm = (event) =>{

    const newUser = {
      first_name:formValues.first_name.trim(),
      last_name:formValues.last_name.trim(),
      email:formValues.email.trim(),
      title:formValues.title.trim(),
      terms:formValues.terms
    }
    postNewUser(newUser)
  }

  const postNewUser = (newUser) =>{
    axios.post(`https://reqres.in/api/users`, newUser)
    .then((res)=>{
      setUser([res.data, ...newUser])
      setFormValues(initialValues)
    })
    .catch((Err) => {
      console.log(Error)
    })
  }

  const onChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors,[name]: '',})
    })
    .catch((err) => {
      setFormErrors({...formErrors,[name]: err.errors[0],
      })
    })
    setFormValues({...formValues, [name]: value,})
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <div className="App">
      <Route path='/Form'>
        <Form onChange={onChange} values={formValues} newUserForm={newUserForm} disabled={disabled} errors={formErrors}/></Route>
      <Route path='/Users'><Users props={user}/></Route>
    </div>
  );
}

export default App;
