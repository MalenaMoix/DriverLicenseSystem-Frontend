import React from 'react'
import {TextInputField,TextInput,TextareaField,Button,SelectField,FormField} from "evergreen-ui"

const IssueLicenceForm = ({ form, onChange, onSubmit, getUser }) =>(
    <div className="container">
        <form onSubmit={onSubmit}>
            <TextInputField
                label="DNI:"
                name="dni"
                placeholder="41824917"
                onChange={onChange}
                value={form.dni}
            />

            <Button onClick={getUser} appearance="primary" marginRight={16} height={56}>Buscar titular</Button>

            <TextInputField
                label="Documento:"
                name="dniLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.dni}
            />

            <TextInputField
                label="Apellido y nombre:"
                name="nameLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.name}
            />

            <TextInputField
                label="Fecha de nacimiento:"
                name="birthDateLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.birthDate}
            />

            <TextInputField
                label="Direccion:"
                name="addressLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.address}
            />

            <TextInputField
                label="Grupo sanguineo:"
                name="bloodTypeLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.bloodType}
            />

            <TextInputField
                label="Es donante:"
                name="donorLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.donor}
            />

            <SelectField
                label="Clase de licencia"
                name="licenceClass"
                onChange={onChange}
                value={form.licenceClass}
            >
                <option value="A" selected>A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
            </SelectField>

            <TextInputField
                label="Valida hasta:"
                name="validUntilLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.validUntil}
            />

            <TextInputField
                label="Costo:"
                name="costLbl"
                placeHolde={""}
                disabled
                onChange={onChange}
                value={form.cost}
            />

            <TextareaField
                label="Observaciones:"
                name="observations"
                placeholder="Escriba aqui las observaciones..."
                onChange={onChange}
                value={form.observations}
            ></TextareaField>

            <div className="buttonGroup">
                <Button marginRight={16} height={56} appearance="primary">Cancelar</Button>
                <Button onClick={onSubmit} marginRight={16} height={56} appearance="primary">Aceptar</Button>
            </div>
        </form>
    </div>
)

export default IssueLicenceForm