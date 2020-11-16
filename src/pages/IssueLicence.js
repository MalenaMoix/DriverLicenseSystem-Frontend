import React from 'react'
import IssueLicenceForm from '../components/IssueLicenceForm'

const IssueLicence = ({form, onChange, onSubmit, onSubmitDNI}) =>(
    <div>
        <IssueLicenceForm
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            onSubmitDNI={onSubmitDNI}
        />
    </div>
)

export default IssueLicence