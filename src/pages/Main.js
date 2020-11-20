import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button,Heading } from 'evergreen-ui'

const Main = () =>(
    <Fragment>
        <Heading size={700} marginTop="default">Sistema de gestion de licencias de conducir</Heading>
        <Heading size={700} marginTop="default">Municipalidad de Santa Fe</Heading>
        <div>
            <Link to="/issueLicense">
                <Button marginRight={16} height={56} appearance="primary">Emitir Licencia</Button>
            </Link>
            <Link to="/registerUser">
                <Button marginRight={16} height={56} appearance="primary">Dar de alta titular</Button>
            </Link>
        </div>
    </Fragment>
)

export default Main