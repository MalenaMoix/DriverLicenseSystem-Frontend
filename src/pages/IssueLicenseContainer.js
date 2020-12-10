import { LessThanIcon, toaster } from 'evergreen-ui'
import React, { useState} from 'react'
import { Redirect } from 'react-router-dom'
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
        rhFactor:"",
        donor:"",
        gender:"",
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

	const [costIsCalculated, setCostIsCalculated] = useState(false);
	const [ownerFound, setOwnerFound] = useState(false);
	const [dialogIsShown, setDialogIsShown] = useState(false);

	const handleChangeLicense = (e) => {
		if (e.target.name === 'licenseClass') {
			setCostIsCalculated(false);
		}
		setLicense({
			...license,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeLicenseOwner = (e) => {
		setLicenseOwner({
			...licenseOwner,
			[e.target.name]: e.target.value,
		});
	};

	const getLicenseOwner = async (e) => {
		setCostIsCalculated(false);
        e.preventDefault();
            try{
                let res = await fetch(`http://localhost:9090/owner/${licenseOwner.document}`)
                
                if(res.ok){
                    let data = await res.json()
                    console.log(data.document)
                    if(data.document !== null){
                       console.log(data.document)
                        setOwnerFound(true)
                        setLicenseOwner(data)
                        setLicense({...license, licenseOwner})

                    }
                    else{
                        setOwnerFound(false)
                        console.log("No existe y doc es null")
                        
                        //TODO Borrar datos de la pantalla
                        setDialogIsShown(true)
                    }

                }
                else{
                    setOwnerFound(false)
                    console.log("No existe")
                    //TODO Borrar datos de la pantalla
                    setDialogIsShown(true)
                }
            } catch (error) {
                console.log(error)
                setOwnerFound(false)
                console.log("Error de usuario")
                toaster.danger("ERROR AL BUSCAR TITULAR EN LA BASE DE DATOS.", {duration:5})
            }
            console.log(licenseOwner) //TODO sacar este log
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
                
                let include = false
                let listSize = 0
                while(!include && licenseOwner.licensesList.length>listSize){
                    if(licenseOwner.licensesList[listSize].licenseClass===license.licenseClass){
                        include=true
                    }
                    listSize++
                    console.log("Entro al while")
                }
                if(include){
                    toaster.notify("La licencia será renovada")
                }
            } catch (error) {
                console.log("Error en la DB")
                toaster.danger("ERROR AL CALCULAR COSTO Y VIGENCIA DE LA LICENCIA.", {duration:5})
            }
        }
        else{
            toaster.warning("NO SE HA SELECCIONADO NINGUN TITULAR.", {duration:5})
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(costIsCalculated){
        try {
            let config = {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json",
                },
                body: JSON.stringify(license)
            }
                     
            console.log(license.licenseCost)
               
                      
            let res = await fetch(`http://localhost:9090/license`, config)
            let idLicense = ""
            switch(res.status){
               
                case (200):{
                    res.text().then(value => {
                        idLicense=value
                        console.log("ES EL ID DE LA LICENCIA" + idLicense)
                        //Tuve que usar este metodo porque con el fetch no se descarga el PDF.
                        window.location=`http://localhost:9090/license/licensePDF/${idLicense}` 
                        toaster.success("LICENCIA GUARDADA CON EXITO", {duration:5}) 
                        history.replace("/main")
                    })                    
                   
                    break
                }
                case (403):{
                    toaster.danger("EL TITULAR NO ES APTO PARA ESTA LICENCIA.", {duration:5})
                    break
                }
                default:{
                    toaster.danger("ERROR DEL SERVIDOR.", {duration:5})
                }
            }//.then para mostrar algo aca TODO
           
        } catch (error) {
            console.log("Error en el POST")
            console.log(error)
            toaster.danger("No se pudo guardar la licencia. Reintententelo.", {duration:5})
            //Ver si pongo algo aca
        }
    }
    else{
        toaster.warning("Falta calcular costo y vigencia de la licencia", {duration:5})
     }
    }

	const handleCancel = (e) => {
		e.preventDefault();
		history.replace('/main');
	};

	const handleCancelDialog = () => {
		setDialogIsShown(false);
	};
	const handleConfirmDialog = () => {
		setDialogIsShown(false);
		history.push('/registerUser');
	};

    const getCurrentLicensesClass = () =>{
        let licensesClasses = []
        if(ownerFound){
            licenseOwner.licensesList.forEach(e => {
                licensesClasses.push(e.licenseClass)
            });
        }
        return licensesClasses
    }

    return <IssueLicense
        license={license}
        licenseOwner={licenseOwner}
        costIsCalculated={costIsCalculated}
        ownerFound={ownerFound}
        dialogIsShown = {dialogIsShown}
        handleConfirmDialog = {handleConfirmDialog}
        handleCancelDialog = {handleCancelDialog}
        onChangeLicense={handleChangeLicense}
        onChangeLicenseOwner={handleChangeLicenseOwner}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        getLicenseOwner={getLicenseOwner}
        getCostAndValidUntil={getCostAndValidUntil}
        getCurrentLicensesClass={getCurrentLicensesClass}
    />
}

export default IssueLicenseContainer;
