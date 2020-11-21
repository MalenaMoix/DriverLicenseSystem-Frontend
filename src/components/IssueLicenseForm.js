import React from 'react'
import {TextInputField,TextareaField,Button,SelectField,Pane} from "evergreen-ui"

const IssueLicenseForm = ({ license, licenseOwner, onChangeLicense, onChangeLicenseOwner, onSubmit, onCancel, getLicenseOwner, getCostAndValidUntil }) =>(
    <div className="container">
        <form>
            <Pane marginLeft={24} marginRight={24} marginTop={24} marginBottom={24}>
                <Pane display="flex">
                    <TextInputField
                        flex={1}
                        label="DNI:"
                        name="document"
                        placeholder="41824917"
                        onChange={onChangeLicenseOwner}
                        value={licenseOwner.document}
                    />
                    <Button
                        onClick={getLicenseOwner}
                        appearance="primary"
                        marginLeft={16}
                        marginTop={25}
                        height={30}>Buscar titular</Button>
                </Pane>

                <TextInputField
                    label="Documento:"
                    name="documentLbl"
                    placeHolde={""}
                    disabled
                    value={licenseOwner.document}
                />

                <TextInputField
                    label="Apellido y nombre:"
                    name="lastNameAndNameLbl"
                    placeHolde={""}
                    disabled
                    value={`${licenseOwner.lastName} ${licenseOwner.name}`}
                />

                <TextInputField
                    label="Fecha de nacimiento:"
                    name="birthDateLbl"
                    placeHolde={""}
                    disabled
                    value={licenseOwner.birthDate}
                />

                <TextInputField
                    label="Direccion:"
                    name="addressLbl"
                    placeHolde={""}
                    disabled
                    value={licenseOwner.address}
                />
            
                <TextInputField
                    label="Grupo sanguineo:"
                    name="bloodTypeLbl"
                    placeHolde={""}
                    disabled
                    value={licenseOwner.bloodType}
                />
    
                <TextInputField
                    label="Es donante:"
                    name="isDonorLbl"
                    placeHolde={""}
                    disabled
                    value={licenseOwner.donor? "Si" : "No"}
                />

                <Pane display="flex">
                    <SelectField
                        flex={1}
                        label="Clase de licencia"
                        name="licenseClass"
                        onChange={onChangeLicense}
                        value={license.licenseClass}
                    >
                        <option value="A" selected>A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                    </SelectField>
                    <Pane alignItems="center" display="flex">
                        <Button onClick={getCostAndValidUntil} appearance="primary" marginLeft={16} height={30}>Calcular costo y vigencia</Button>
                    </Pane>
                </Pane>

                <TextInputField
                    label="Valida hasta:"
                    name="licenseTermLbl"
                    placeHolde={""}
                    disabled
                    value={license.licenseTerm}
                />

                <TextInputField
                    label="Costo:"
                    name="costLbl"
                    placeHolde={""}
                    disabled
                    value={license.licenseCost}
                />

                <TextareaField
                    label="Observaciones:"
                    name="observations"
                    placeholder="Escriba aqui las observaciones..."
                    onChange={onChangeLicense}
                    value={license.observations}
                ></TextareaField>

                <Pane>
                    <Button onClick={onCancel} marginBottom={16} height={30} appearance="primary">Cancelar</Button>
                    <Button onClick={onSubmit} marginBottom={16} marginLeft={16} height={30} appearance="primary">Aceptar</Button>
                </Pane>
            </Pane>
        </form>
    </div>
)

export default IssueLicenseForm