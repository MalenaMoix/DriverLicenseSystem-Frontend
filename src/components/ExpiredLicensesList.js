import React, {useState} from 'react';
import {Table, TableBody, TableHead} from "evergreen-ui";

function ExpiredLicensesList() {

    const [licenses, setLicenses] = useState([{
        id: 123,
        licenseOwner:{
            document: 1234456789,
            name: "Nombre titular",
            lastName: "Apellido",
            address: 'Falsa 123, Springfield'
        },
        licenseClass:"A",
        observations:"",
        licenseTerm:"4/12/2025",
        licenseCost:""
    },{
        id: 124,
        licenseOwner:{
            document: 987654312,
            name: "Nombre titular 4",
            lastName: "Apellido 4",
            address: 'Falsa 124, Springfield'
        },
        licenseClass:"H",
        observations:"",
        licenseTerm:"4/10/2023",
        licenseCost:""
    },{
        id: 125,
        licenseOwner:{
            document: 65321654987,
            name: "Nombre titular 5",
            lastName: "Apellido 5",
            address: 'Falsa 124, Springfield'
        },
        licenseClass:"C",
        observations:"",
        licenseTerm:"4/2/2030",
        licenseCost:""
    },{
        id: 126,
        licenseOwner:{
            document: 98765132,
            name: "Nombre titular 6",
            lastName: "Apellido 6",
            address: 'Falsa 126, Springfield'
        },
        licenseClass:"G",
        observations:"",
        licenseTerm:"4/12/2025",
        licenseCost:""
    }])

    return (
        <>
            <h1>Licencias Expiradas</h1>
            <Table className="flex-lg-wrap">
                <TableHead>
                    <Table.TextHeaderCell>
                        Apellido y nombre
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Documento
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Domicilio
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Fecha expiración
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Clase
                    </Table.TextHeaderCell>
                </TableHead>
                <TableBody>
                    {
                        licenses.map(license =>(
                            <Table.Row key={license.id}>
                                <Table.Cell>{license.licenseOwner.lastName} {license.licenseOwner.name}</Table.Cell>
                                <Table.Cell>{license.licenseOwner.document}</Table.Cell>
                                <Table.Cell>{license.licenseOwner.address}</Table.Cell>
                                <Table.Cell>{license.licenseTerm}</Table.Cell>
                                <Table.Cell>{license.licenseClass}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
}

export default ExpiredLicensesList;