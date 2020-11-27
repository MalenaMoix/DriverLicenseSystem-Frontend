import React from 'react'
import IssueLicenceForm from '../components/IssueLicenseForm'

const IssueLicense = ({license, licenseOwner, costIsCalculated,ownerFound, dialogIsShown, handleConfirmDialog, handleCancelDialog, onChangeLicense, onChangeLicenseOwner, onSubmit, onCancel, getLicenseOwner, getCostAndValidUntil}) =>(
    <div>
        <IssueLicenceForm
            license={license}
            licenseOwner={licenseOwner}
            costIsCalculated={costIsCalculated}
            ownerFound={ownerFound}
            dialogIsShown = {dialogIsShown}
            handleConfirmDialog = {handleConfirmDialog}
            handleCancelDialog = {handleCancelDialog}
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