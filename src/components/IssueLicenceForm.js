import React from 'react'
import {TextInputField,Button,SelectField} from "evergreen-ui"

const IssueLicenceForm = ({ onChange, onSubmit, form, onSubmitDNI }) =>(
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <TextInputField
                    label="DNI:"
                    placeholder="41824917"
                    onChange={onChange}
                    value={form.dni}
                />
            </div>
            <div className="form-group">
                <Button marginRight={16} height={56} appearance="primary">Buscar usuario</Button>
            </div>
            <div className="form-group">
                <SelectField
                    label="Clase de licencia"
                    onChange={onChange}
                    value={form.claseLicencia}
                >
                    <option value="A" selected>A</option>
                    <option value="B">B</option>
                </SelectField>
            </div>
            <div className="form-group">
                
            </div>
        </form>
    </div>
)

export default IssueLicenceForm