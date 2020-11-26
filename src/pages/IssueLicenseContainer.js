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

    const[costIsCalculated, setCostIsCalculated] = useState(false);
    const[ownerFound, setOwnerFound] = useState(false);

    const handleChangeLicense = e => {
       
        if(e.target.name==="licenseClass"){
            setCostIsCalculated(false)
        
        }
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
        setCostIsCalculated(false)
        e.preventDefault();
      
        if(licenseOwner.document===""){
            setOwnerFound(false)
            alert("POR FAVOR, INGRESE EL DNI DEL TITULAR.")
        }
        else{
            try {

                let res = await fetch(`http://localhost:9090/owner/${licenseOwner.document}`)
                
                if(res.ok){
                    let data = await res.json()
                    console.log(data.document)
                    if(data.document !== null){
                       
                        setOwnerFound(true)
                        setLicenseOwner(data)
                        setLicense({...license, licenseOwner})}
                    
                    else{
                        setOwnerFound(false)
                        console.log("No existe y doc es null")
                        //TODO Borrar datos de la pantalla
                        alert("TITULAR NO ENCONTRADO")
                    }
                }
                else{
                    setOwnerFound(false)
                    console.log("No existe")
                    //TODO Borrar datos de la pantalla
                    alert("TITULAR NO ENCONTRADO")
                }
            } catch (error) {
                setOwnerFound(false)
                console.log("Error de usuario")
                alert("ERROR AL BUSCAR TITULAR EN LA BASE DE DATOS.")
            }
        }
       

    }
    const getCostAndValidUntil = async e =>{
        e.preventDefault();
        if(ownerFound){
            let observations = license.observations;
            try {
                let res = await fetch(`http://localhost:9090/license/${license.licenseOwner.document}/${license.licenseClass}`)
                let data = await res.json()
                setCostIsCalculated(true)
                data.observations=observations
                setLicense({...license, licenseCost: data.licenseCost, licenseTerm:data.licenseTerm})
              
            } catch (error) {
                console.log("Error en la DB")
                alert("ERROR AL CALCULAR COSTO Y VIGENCIA DE LA LICENCIA.")
            }
        }
        else{
            alert("NO SE HA SELECCIONADO NINGUN TITULAR.")
        }
    }

    const handleSubmit = async e => {
        if(costIsCalculated){
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
            let res = await fetch(`http://localhost:9090/license`, config)
            switch(res.status){
                case (200):{
                    alert("LICENCIA GUARDADA CON EXITO")
                    break
                }
                case (403):{
                    alert("EL TITULAR NO ES APTO PARA ESTA LICENCIA.")
                    break
                }
                default:{
                    alert("ERROR DEL SERVIDOR.")
                }
            }//.then para mostrar algo aca TODO
            
            history.push("/main")
        } catch (error) {
            console.log("Error en el POST")
            alert("No se pudo guardar la licencia. Reintententelo.")
            //Ver si pongo algo aca
        }
    }
    else{
        alert("Falta calcular costo y vigencia de la licencia")
    }
    }

    const handleCancel = e =>{
        e.preventDefault()
        history.push("/main")
    }

    return <IssueLicense
        license={license}
        licenseOwner={licenseOwner}
        costIsCalculated={costIsCalculated}
        ownerFound={ownerFound}
        onChangeLicense={handleChangeLicense}
        onChangeLicenseOwner={handleChangeLicenseOwner}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        getLicenseOwner={getLicenseOwner}
        getCostAndValidUntil={getCostAndValidUntil}
    />
}

export default IssueLicenseContainer