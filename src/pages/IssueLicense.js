import React from 'react'
import IssueLicenceForm from '../components/IssueLicenseForm'

const IssueLicense = ({license, licenseOwner, onChangeLicense, onChangeLicenseOwner, onSubmit, onCancel, getLicenseOwner, getCostAndValidUntil}) =>(
    <div>
        <IssueLicenceForm
            license={license}
            licenseOwner={licenseOwner}
            onChangeLicense={onChangeLicense}
            onChangeLicenseOwner={onChangeLicenseOwner}
            onSubmit={onSubmit}
            onCancel={onCancel}
            getLicenseOwner={getLicenseOwner}
            getCostAndValidUntil={getCostAndValidUntil}
        />
    </div>
)

export default IssueLicense