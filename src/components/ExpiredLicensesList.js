import React from 'react';
import {Button, Pane, Table, TableBody, TableHead} from "evergreen-ui";


function ExpiredLicensesList({licenses, goBack}) {


    return (
        <Pane marginLeft={24} marginRight={24} marginTop={24} marginBottom={24}>
            <Pane width={"max-content"} margin={"auto"} marginBottom={40}>
                <h1>Licencias Expiradas</h1>
            </Pane>
            <Table margin={"auto"} marginBottom={30} maxWidth={"80%"}>
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
            <Pane margin={"auto"} width={"max-content"} >
                <Button onClick={goBack} appearance={"primary"} height={40}>Volver</Button>
            </Pane>
        </Pane>
    );
}

export default ExpiredLicensesList;