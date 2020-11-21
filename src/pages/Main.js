import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button,Heading} from 'evergreen-ui'

const Main = () =>(
    <Fragment>
        <div  className="row center"> 
        <button  >Hola</button>
        <button >Hola2</button></div>
        <div style={{flexDirection:"column", flex:2 }}> 
        <Heading  size={700} marginTop="default">Sistema de gestion de licencias de conducir</Heading>
        <Heading  size={700} marginTop="default">Municipalidad de Santa Fe</Heading>
        
           
            <Link to="/issueLicense">
                <Button marginTop="default"  marginRight={16} height={56} appearance="primary">Emitir Licencia</Button>
            </Link>
            <Link to="/registerUser">
                <Button marginTop="default" marginRight={16} height={56} appearance="primary">Dar de alta titular</Button>
            </Link>
            <Link to="/expiredLicenses">
                <Button  marginTop="default" marginRight={16} height={56} appearance="primary">Ver licencias expiradas</Button>
            </Link>
            </div>
        
    </Fragment>
)

export default Main