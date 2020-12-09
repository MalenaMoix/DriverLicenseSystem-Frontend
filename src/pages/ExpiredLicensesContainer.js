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
                console.log("Response: ", res);
                if(res.ok) {
                    console.log("No hay error");
                    res.json().then(data => {
                        console.log("Datos recibidos: ", data);
                        if(data) {
                            setLicenses(data);
                        }
                    })
                        .catch(error => {
                            console.log("Se produjo un error al obtener los datos: ", error);
                            toaster.danger("Error al cargar la lista de licencias expiradas.");
                        });
                }else{
                    console.log("El servidor respondió con error");
                    toaster.danger("Error al cargar la lista de licencias expiradas.");
                }
            })
            .catch(error =>{
                console.log("Se produjo un error en el fetch: ", error);
                toaster.danger("Error al cargar la lista de licencias expiradas.");
            });

    },[]);

    let goBack = e => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="container">
            <ExpiredLicensesList licenses={licenses} marginTop={30} height={30} goBack={goBack}/>
        </div>
    );
}

export default ExpiredLicensesContainer;