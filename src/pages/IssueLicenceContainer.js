import React, { useState } from 'react'
import IssueLicence from './IssueLicence'

const IssueLicenceContainer = () =>{
    const [form, setForm] = useState({
        dni:"",
        licenceClass:"A",
        observations:"",
        name:"",
        birthDate:"",
        address:"",
        bloodType:"",
        donor:"",
        validUntil:"",
        cost:""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    //TODO Hacer el handleSubmit
    const handleSubmit = async e => {

    }

    //TODO Hacer el handleSubmitDNI
    const getUser = async e => {
        e.preventDefault();
        alert(`El DNI es: ${form.dni}`);
    }

    return <IssueLicence
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        getUser={getUser}
    />
}

export default IssueLicenceContainer