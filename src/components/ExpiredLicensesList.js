import React from 'react';
import {Button, Table, TableBody, TableHead} from "evergreen-ui";


function ExpiredLicensesList({licenses, goBack}) {


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
                            <Table.Row key={license.idLicense}>
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
            <Button onClick={goBack}>Volver</Button>
        </>
    );
}

export default ExpiredLicensesList;