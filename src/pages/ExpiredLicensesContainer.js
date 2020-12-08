import React, {useEffect, useState} from 'react';
import ExpiredLicensesList from "../components/ExpiredLicensesList";
import {toaster} from "evergreen-ui";

function ExpiredLicensesContainer({history}) {

    const [licenses, setLicenses] = useState([]);

    useEffect(() =>{
        let config = {
            method:"GET",
            headers:{
                "Accept":"application/json",
            }
        }
        fetch("http://localhost:9090/license/expiredLicenses", config)
            .then(res => {
                console.log("Respose: ", res);
                if(res.ok) {
                    console.log("No hay error");
                    return res.json();
                }else{
                    console.log("El servidor respondió con error");
                    toaster.danger("Error al cargar la lista de licencias expiradas.");
                }
            })
            .then(data => {
                console.log("Datos recibidos: ", data);
                if(data) {
                    setLicenses(data);
                }
            })
            .catch(error =>{
                console.log("Se produjo un error: ", error);
                toaster.danger("Error al cargar la lista de licencias expiradas.");
            });

    },[]);

    let goBack = e => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div>
            <ExpiredLicensesList licenses={licenses} goBack={goBack}/>
        </div>
    );
}

export default ExpiredLicensesContainer;