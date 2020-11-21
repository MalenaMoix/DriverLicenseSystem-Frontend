import React, { useState } from 'react'
import IssueLicense from './IssueLicense'

const IssueLicenseContainer = ({history}) =>{
    const [licenseOwner, setLicenseOwner] = useState({
        document:"",
        name:"",
        lastName:"",
        birthdate:"",
        address:"",
        observations:"",
        bloodType:"",
        donor:"",
        licensesList:[]
    })
    const [license, setLicense] = useState({
        id:"",
        licenseOwner:{},
        licenseClass:"A",
        observations:"",
        licenseTerm:"",
        licenseCost:""
    })

    const handleChangeLicense = e => {
        setLicense({
            ...license,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeLicenseOwner = e => {
        setLicenseOwner({
            ...licenseOwner,
            [e.target.name]: e.target.value
        })
    }

    const getLicenseOwner = async e => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:9090/owner/${licenseOwner.document}`)
            let data = await res.json()
            if(res.ok){
                setLicenseOwner(data)
                license.licenseOwner=licenseOwner
            }else{
                console.log("No existe")
                //TODO Borrar datos de la pantalla
            }
        } catch (error) {
            console.log("Error de usuario")
        }

    }
    const getCostAndValidUntil = async e =>{
        e.preventDefault();
        try {
            let config = {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json",
                },
                body: JSON.stringify(license)
            }
            let res = await fetch(`http://localhost:9090/license/getCostAndValidUntil`, config)
            let data = await res.json()
            setLicense(data)
        } catch (error) {
            console.log("Error en la DB")
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            let config = {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json",
                },
                body: JSON.stringify(license)
            }
            await fetch(`http://localhost:9090/license`, config)//.then para mostrar algo aca TODO
            history.push("/main")
        } catch (error) {
            console.log("Error en el POST")
            //Ver si pongo algo aca
        }
    }

    const handleCancel = e =>{
        e.preventDefault()
        history.push("/main")
    }

    return <IssueLicense
        license={license}
        licenseOwner={licenseOwner}
        onChangeLicense={handleChangeLicense}
        onChangeLicenseOwner={handleChangeLicenseOwner}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        getLicenseOwner={getLicenseOwner}
        getCostAndValidUntil={getCostAndValidUntil}
    />
}

export default IssueLicenseContainer