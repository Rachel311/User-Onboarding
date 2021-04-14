import React from 'react';
import styled from 'styled-components';


export default function Form({values, onChange, newUserForm, disabled, errors}){

    const onSubmit = (event) => {
        event.preventDefault()
        newUserForm()
    }

    const onChanger = (e) => {
        const { name, value, type, checked } = e.target
        const values = type === "checkbox" ? checked : value
        onChange(name, values)
    }

    const InputBox = styled.input`
    width: 95%;
    height: 56px;
    border-radius: 4px;
    position: relative;
    background-color: rgba(255,255,255,0.3);
    transition: 0.3s all;
    text-align:center;
    `



    return(
        <div>
            <form onSubmit={onSubmit}>

                <div>
                    <div>{errors.first_name}</div>
                    <label>First name:
                    <InputBox
                    name='first_name'
                    type='text'
                    placeholder='first name'
                    onChange={onChanger}
                    value={values.first_name}/>
                    </label>
                </div>
                <div>
                    <div>{errors.last_name}</div>
                    <label>Last Name:
                    <InputBox
                    name= 'last_name'
                    type='text'
                    placeholder='last name'
                    onChange={onChanger}
                    value={values.last_name}
                    />
                </label>
                </div>
                <div>
                    <div>{errors.email}</div>
                    <label><div>Email:</div>
                    <InputBox
                    name='email'
                    type='email'
                    placeholder='email'
                    onChange={onChanger}
                    value={values.email}
                    />
                    </label>
                </div>
                <div>
                <div>{errors.password}</div>
                <label><div>Password:</div>
                    <InputBox
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={onChanger}
                    value={values.password}
                    />
                </label>
                </div>
                <div>
                <label>Title:
                    <div>
                  <select name='title' onChange = {onChanger} value= {values.title}>
                      <option value=''>--Select Role--</option>
                      <option value='Student'>Student</option>
                      <option value='Instructor'>Instructor</option>
                  </select>
                  </div>
                  </label>
                </div>

                <div>
                    <div>{errors.terms}</div>
                    <label><div>Terms and conditions:</div>
                    <input
                    type='checkbox'
                    />
                    </label>
                </div>

                <button disabled={disabled}>Submit</button>

            </form>
        </div>
    )
}