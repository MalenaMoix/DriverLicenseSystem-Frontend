import React, { useState } from 'react'
import IssueLicence from './IssueLicence'

const IssueLicenceContainer = () =>{
    const [form, setForm] = useState({
        dni:"",
        claseLicencia:"",
        observaciones:""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //TODO Hacer el handleSubmit
    const handleSubmit = async e => {

    }

    //TODO Hacer el handleSubmitDNI
    const handleSubmitDNI = async e => {

    }

    return <IssueLicence
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onSubmitDNI={handleSubmitDNI}
    />
}

export default IssueLicenceContainer