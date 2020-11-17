import React from 'react'
import {TextInputField,TextInput,TextareaField,Button,SelectField} from "evergreen-ui"

const IssueLicenceForm = ({ form, onChange, onSubmit, onSubmitDNI }) =>(
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <TextInputField
                    label="DNI:"
                    name="dni"
                    placeholder="41824917"
                    onChange={onChange}
                    value={form.dni}
                />
            </div>
            <div className="form-group">
                <Button marginRight={16} height={56} appearance="primary">Buscar usuario</Button>
            </div>
            <div className="form-group">
                <label name="documentLbl">Documento: {form.dni}</label>
            </div>
            <div className="form-group">
                <label name="nameLbl">Apellido y nombre: {}</label>
            </div>
            <div className="form-group">
                <label name="birthDateLbl">Fecha de nacimiento: {}</label>
            </div>
            <div className="form-group">
                <label name="addressLbl">Direccion: {}</label>
            </div>
            <div className="form-group">
                <label name="bloodTypeLbl">Grupo sanguineo: {}</label>
            </div>
            <div className="form-group">
                <label name="donorLbl">Es donante: {}</label>
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
                <label name="validUntilLbl">Valida hasta: {}</label>
            </div>
            <div className="form-group">
                <label name="costLbl">Costo: {}</label>
            </div>
            <div className="form-group">
                <TextareaField
                    label="Observaciones:"
                    name="observations"
                    placeholder="Escriba aqui las observaciones..."
                    onChange={onChange}
                    value={form.observations}
                ></TextareaField>
            </div>
        </form>
    </div>
)

export default IssueLicenceForm