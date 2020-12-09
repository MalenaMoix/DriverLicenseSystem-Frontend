
import React from 'react'
import {TextInputField,TextareaField,Button,SelectField,Pane,Dialog} from "evergreen-ui"
import { Link, Redirect } from 'react-router-dom'
const IssueLicenseForm = ({ license, licenseOwner, costIsCalculated,ownerFound,dialogIsShown, handleConfirmDialog, handleCancelDialog, onChangeLicense, onChangeLicenseOwner, onSubmit, onCancel, getLicenseOwner, getCostAndValidUntil, getCurrentLicensesClass }) =>(
  
    <div className="container">
     
        <Dialog
            isShown={dialogIsShown}
            title="TITULAR INEXISTENTE"
            confirmLabel="Crear titular"
            onConfirm={handleConfirmDialog}
            onCancel={handleCancelDialog}
            cancelLabel="No">
            ¿Desea crear un nuevo titular?
        </Dialog>

const IssueLicenseForm = ({
	license,
	licenseOwner,
	costIsCalculated,
	ownerFound,
	dialogIsShown,
	handleConfirmDialog,
	handleCancelDialog,
	onChangeLicense,
	onChangeLicenseOwner,
	onSubmit,
	onCancel,
	getLicenseOwner,
	getCostAndValidUntil,
}) => (
	<div className="container">
		<Dialog
			isShown={dialogIsShown}
			title="TITULAR INEXISTENTE"
			confirmLabel="Crear titular"
			onConfirm={handleConfirmDialog}
			onCancel={handleCancelDialog}
			cancelLabel="No"
		>
			¿Desea crear un nuevo titular?
		</Dialog>

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
						maxLength={12}
					/>
					<Button
						onClick={getLicenseOwner}
						appearance="primary"
						marginLeft={16}
						marginTop={25}
						height={30}
					>
						Buscar titular
					</Button>
				</Pane>
				<TextInputField
					label="Documento:"
					name="documentLbl"
					placeHolde=""
					disabled
					value={ownerFound ? licenseOwner.document : ''}
				/>

				<TextInputField
					label="Apellido y nombre:"
					name="lastNameAndNameLbl"
					placeHolde=""
					disabled
					value={
						ownerFound ? `${licenseOwner.lastName} ${licenseOwner.name}` : ''
					}
				/>

                <TextInputField
                    label="Direccion:"
                    name="addressLbl"
                    placeHolde={""}
                    disabled
                    value={ownerFound ? licenseOwner.address : ""}
                />
            
                <TextInputField
                    label="Grupo sanguineo:"
                    name="bloodTypeLbl"
                    placeHolde={""}
                    disabled
                    value={ownerFound ? licenseOwner.bloodType+licenseOwner.rhFactor : ""}
                />
    
                <TextInputField
                    label="Es donante:"
                    name="isDonorLbl"
                    placeHolde={""}
                    disabled
                    value={ownerFound ? (licenseOwner.donor ? "Si" : "No") : ""}
                />

                <TextInputField
                    label="Licencias vigentes:"
                    name="currentLicensesLbl"
                    placeHolde={""}
                    disabled
                    value={ownerFound ? getCurrentLicensesClass() : ""}
                />

                <Pane display="flex">
                    <SelectField
                        flex={1}
                        label="Clase de licencia"
                        name="licenseClass"
                        onChange={onChangeLicense}
                        value={ownerFound ? license.licenseClass : ""}
                        disabled={licenseOwner.name!==""? false : true}
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
					label="Grupo sanguineo:"
					name="bloodTypeLbl"
					placeHolde=""
					disabled
					value={ownerFound ? licenseOwner.bloodType : ''}
				/>

				<TextInputField
					label="Es donante:"
					name="isDonorLbl"
					placeHolde=""
					disabled
					// eslint-disable-next-line no-nested-ternary
					value={ownerFound ? (licenseOwner.donor ? 'Si' : 'No') : ''}
				/>

				<Pane display="flex">
					<SelectField
						flex={1}
						label="Clase de licencia"
						name="licenseClass"
						onChange={onChangeLicense}
                        value={ownerFound ? license.licenseClass : ''}
                        disabled={!ownerFound}
					>
						<option value="A" selected>
							A
						</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="E">E</option>
						<option value="F">F</option>
						<option value="G">G</option>
					</SelectField>
					<Pane alignItems="center" display="flex">
						<Button
							onClick={getCostAndValidUntil}
							appearance="primary"
							marginLeft={16}
                            height={30}
						>
							Calcular costo y vigencia
						</Button>
					</Pane>
				</Pane>

                <Pane>

                    <Button onClick={onCancel} marginBottom={16} height={30} appearance="primary">Cancelar</Button>
                    <Button onClick={onSubmit} marginBottom={16} marginLeft={16} height={30} appearance="primary">Aceptar</Button>
              
                </Pane>
            </Pane>
        </form>
    </div>
)

				<TextInputField
					label="Costo:"
					name="costLbl"
					placeHolde=""
					disabled
					value={costIsCalculated ? license.licenseCost : ''}
				/>

				<TextareaField
					label="Observaciones:"
					name="observations"
					placeholder="Escriba aqui las observaciones..."
					maxLength={100}
					onChange={onChangeLicense}
					value={ownerFound ? license.observations : ''}
				/>

				<Pane>
					<Button
						onClick={onCancel}
						marginBottom={16}
						height={30}
						appearance="primary"
					>
						Cancelar
					</Button>
					<Button
						onClick={onSubmit}
						marginBottom={16}
						marginLeft={16}
						height={30}
						appearance="primary"
					>
						Aceptar
					</Button>
				</Pane>
			</Pane>
		</form>
	</div>
);

export default IssueLicenseForm;
