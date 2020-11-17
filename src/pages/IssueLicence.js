import React from 'react'
import IssueLicenceForm from '../components/IssueLicenceForm'

const IssueLicence = ({form, onChange, onSubmit, getUser}) =>(
    <div>
        <IssueLicenceForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            getUser={getUser}
        />
    </div>
)

export default IssueLicence