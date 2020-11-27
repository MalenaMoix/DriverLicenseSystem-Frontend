import React, {useState} from 'react';
import {Table, TableBody, TableHead} from "evergreen-ui";

function ExpiredLicensesList(props) {

    const [licenses, setLicenses] = useState([{
        id:"",
        licenseOwner:{},
        licenseClass:"A",
        observations:"",
        licenseTerm:"",
        licenseCost:""
    }])

    return (
        <Table className="flex-lg-wrap">
            <TableHead>
                <Table.TextHeaderCell>
                    DNI
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                    Nombre
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                    Apellido
                </Table.TextHeaderCell>
            </TableHead>
            <TableBody>
                <Table.Row key={123}>
                    <Table.TextCell>Prueba DNI</Table.TextCell>
                    <Table.TextCell>Prueba Nombre</Table.TextCell>
                    <Table.TextCell>Prueba Apellido</Table.TextCell>
                </Table.Row>
                <Table.Row key={1234}>
                    <Table.TextCell>Prueba DNI 2</Table.TextCell>
                    <Table.TextCell>Prueba Nombre 2</Table.TextCell>
                    <Table.TextCell>Prueba Apellido 2</Table.TextCell>
                </Table.Row>
                <Table.Row key={1234}>
                    <Table.TextCell>Prueba DNI 3</Table.TextCell>
                    <Table.TextCell>Prueba Nombre 3</Table.TextCell>
                    <Table.TextCell>Prueba Apellido 3</Table.TextCell>
                </Table.Row>
            </TableBody>
        </Table>
    );
}

export default ExpiredLicensesList;