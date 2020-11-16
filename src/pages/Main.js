import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'evergreen-ui'

const Main = () =>(
    <Fragment>
        <div>
            <Link to="/issueLicence">
                <Button marginRight={16} height={56} appearance="primary">Emitir Licencia</Button>
            </Link>
        </div>
        <div>
            <Link to="/registerUser">
                <Button marginRight={16} height={56} appearance="primary">Dar de alta titular</Button>
            </Link>
        </div>
    </Fragment>
)

export default Main