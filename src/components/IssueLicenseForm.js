import React from 'react'
import {TextInputField,TextareaField,Button,SelectField} from "evergreen-ui"

const IssueLicenseForm = ({ license, licenseOwner, onChangeLicense, onChangeLicenseOwner, onSubmit, onCancel, getLicenseOwner, getCostAndValidUntil }) =>(
    <div className="container">
        <form>
            <TextInputField
                label="DNI:"
                name="document"
                placeholder="41824917"
                onChange={onChangeLicenseOwner}
                value={licenseOwner.document}
            />

            <Button onClick={getLicenseOwner} appearance="primary" marginRight={16} height={56}>Buscar titular</Button>

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

            <SelectField
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

            <Button onClick={getCostAndValidUntil} appearance="primary" marginRight={16} height={56}>Calcular costo y vigencia</Button>

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

            <div className="buttonGroup">
                <Button onClick={onCancel} marginRight={16} height={56} appearance="primary">Cancelar</Button>
                <Button onClick={onSubmit} marginRight={16} height={56} appearance="primary">Aceptar</Button>
            </div>
        </form>
    </div>
)

export default IssueLicenseForm