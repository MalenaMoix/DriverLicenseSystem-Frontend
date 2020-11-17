import React from 'react'
import IssueLicenceForm from '../components/IssueLicenceForm'

const IssueLicence = ({form, onChange, onSubmit, onSubmitDNI}) =>(
    <div>
        <IssueLicenceForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            onSubmitDNI={onSubmitDNI}
        />
    </div>
)

export default IssueLicence