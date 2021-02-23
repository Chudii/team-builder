import React from 'react';

const Form = (props) => {
    const { list } = props;


    return (
        <form >
            <label> Enter Name: 
                <input name='name' placeholder='Name' type='text'/>
            </label>
            <label> Enter Email: 
                <input name='email' placeholder='Email Address' type='text'/>
            </label>
            <label> Enter Role: 
                <input name='role' placeholder='Role' type='text'/>
            </label>
            <button type="submit">Add New Member</button>
        </form>
    );
}

export default Form;