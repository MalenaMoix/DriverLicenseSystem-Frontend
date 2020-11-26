import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button,Heading,Pane,TextInputField} from 'evergreen-ui'

const Main = () =>(
    <Fragment>
        <Pane
        marginLeft={24}
        marginRight={24}
        marginTop={24}
        marginBottom={24}
        >
            <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Heading size={700} marginTop="default">Sistema de gestion de licencias de conducir</Heading>
            </Pane>
            <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Heading size={700} marginTop="default">Municipalidad de Santa Fe</Heading>
            </Pane>
            <Pane
            marginTop={32}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <Link to="/issueLicense">
                    <Button marginTop="default" marginLeft={24} marginRight={24} height={56} appearance="primary">Emitir Licencia</Button>
                </Link>
                <Link to="/registerUser">
                    <Button marginTop="default" marginLeft={24} marginRight={24} height={56} appearance="primary">Dar de alta titular</Button>
                </Link>
                <Link to="/expiredLicenses">
                    <Button  marginTop="default" marginLeft={24} marginRight={24} height={56} appearance="primary">Ver licencias expiradas</Button>
                </Link>
            </Pane>
        </Pane>
    </Fragment>
)

export default Main