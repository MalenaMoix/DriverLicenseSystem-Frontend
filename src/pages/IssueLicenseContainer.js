import React, { useState,useEffect } from 'react'
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
        console.log(license)
    }

    const handleChangeLicenseOwner = e => {
        setLicenseOwner({
            ...licenseOwner,
            [e.target.name]: e.target.value
        })
        //console.log(licenseOwner)
    }

    //TODO
    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            history.push("/main")
            let config = {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json",
                },
                body: JSON.stringify(license)
            }
            //await fetch("La url va aca", config) solo asi anda, eso es para que imprima en consola, para probar
            let res = await fetch(`http://localhost:9090/license`, config)//.then para mostrar algo aca TODO
            history.push("/main")
            
            let json = await res.json() // no es necesario, no anda despues de esta asignacion
            
            console.log(json)
             
        } catch (error) {
            //Ver si pongo algo aca
            
        }
    }

    //TODO
    const getLicenseOwner = async e => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:9090/owner/${licenseOwner.document}`)
            let data = await res.json()
            if(res.ok){
                setLicenseOwner(data)
                license.licenseOwner=licenseOwner
                //console.log(data)
                //console.log(licenseOwner)
                console.log(licenseOwner)
                //Aca actualizo el form con la data
            }else{
                //console.log("No existe")
                //TODO Borrar datos de la pantalla
            }
           
            
        } catch (error) {
            console.log("Error de usuario")
        }
        
    }
    const getCostAndValidUntil = async e =>{
        e.preventDefault();
        try {
            console.log("Entro en el boton pa")
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
            console.log(license)
            
        } catch (error) {
            //Poner algo aca
            console.log("Error en la DB")
        }
    }

    return <IssueLicense
        license={license}
        licenseOwner={licenseOwner}
        onChangeLicense={handleChangeLicense}
        onChangeLicenseOwner={handleChangeLicenseOwner}
        onSubmit={handleSubmit}
        getLicenseOwner={getLicenseOwner}
        getCostAndValidUntil={getCostAndValidUntil}
    />
}

export default IssueLicenseContainer