import React, { useState } from 'react';
import {
	Button,
	Combobox,
	Heading,
	Pane,
	Strong,
	Switch,
	Textarea,
	TextInput,
} from 'evergreen-ui';

const AddHolder = () => {
	// eslint-disable-next-line no-unused-vars
	const [holder, setHolder] = useState();
	// eslint-disable-next-line no-unused-vars
	const style = {
		container: {
			display: 'flex',
			justifyContent: 'center',
		},
	};

	return (
		<Pane
			display="flex"
			flex={1}
			flexDirection="column"
			padding={24}
			background="tint2"
			borderRadius={3}
		>
			<form>
				<Pane
					flex={1}
					justifyContent="center"
					display="flex"
					borderBottom="default"
					paddingBottom={20}
				>
					<Heading size={900}>Dar de alta un titular</Heading>
				</Pane>
				<Pane
					flexDirection="column"
					justifyContent="center"
					display="flex"
					padding={50}
				>
					<Pane display="flex" flexDirection="row" justifyContent="flex-start">
						<Pane
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Strong size={500} marginRight={24}>
								Dni:{' '}
							</Strong>
							<TextInput
								width={200}
								name="text-input-name"
								placeholder="Ingrese el documento"
								marginRight={24}
								required
								type="number"
							/>
						</Pane>
						<Pane display="flex" alignItems="center">
							<Strong size={500} marginRight={24}>
								Apellido:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Text input placeholder..."
								marginRight={24}
							/>
						</Pane>
						<Pane display="flex" alignItems="center">
							<Strong size={500} marginRight={24}>
								Nombre:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Text input placeholder..."
							/>
						</Pane>
					</Pane>
					<Pane
						display="flex"
						alignSelf="flex-start"
						flexDirection="row"
						justifyContent="flex-start"
						marginTop={16}
						// paddingLeft={24}
						// paddingRight={24}
					>
						<Strong size={500} marginRight={24}>
							Fecha de nacimiento:
						</Strong>
						<Combobox
							width={100}
							items={['Banana', 'Orange', 'Apple', 'Mango']}
							onChange={(selected) => console.log(selected)}
							placeholder="día"
							// autocompleteProps={{
							//     // Used for the title in the autocomplete.
							//     title: 'Fruit'
							// }}
						/>
						<Combobox
							width={100}
							items={['Banana', 'Orange', 'Apple', 'Mango']}
							onChange={(selected) => console.log(selected)}
							placeholder="Mes"
							// autocompleteProps={{
							//     // Used for the title in the autocomplete.
							//     title: 'Fruit'
							// }}
						/>
						<Combobox
							width={100}
							items={['Banana', 'Orange', 'Apple', 'Mango']}
							onChange={(selected) => console.log(selected)}
							placeholder="Año"
							// autocompleteProps={{
							//     // Used for the title in the autocomplete.
							//     title: 'Fruit'
							// }}
						/>
						<Pane
							display="flex"
							marginRight={24}
							alignItems="center"
							justifyContent="space-between"
						>
							<Strong size={500} marginRight={24}>
								Grupo sanguineo:
							</Strong>
							<Combobox
								width={100}
								items={['0', 'A', 'B', 'AB']}
								marginRight={24}
								onChange={(selected) => console.log(selected)}
								placeholder="Grupo"
								// autocompleteProps={{
								//     // Used for the title in the autocomplete.
								//     title: 'Fruit'
								// }}
							/>
							<Combobox
								width={125}
								items={['-', '+']}
								onChange={(selected) => console.log(selected)}
								placeholder="Factor RH"
								// autocompleteProps={{
								//     // Used for the title in the autocomplete.
								//     title: 'Fruit'
								// }}
							/>
						</Pane>
						<Pane
							display="flex"
							marginRight={24}
							alignItems="center"
							justifyContent="space-between"
							marginLeft={16}
						>
							<Strong size={500} marginRight={24}>
								Es donante:
							</Strong>
							<Switch height={24} />
						</Pane>
					</Pane>
					<Pane
						display="flex"
						marginTop={16}
						alignItems="center"
						alignContent="flex-start"
					>
						<Pane
							display="flex"
							alignSelf="flex-start"
							flexDirection="row"
							justifyContent="flex-start"
							marginTop={16}
							// paddingLeft={24}
							// paddingRight={24}
						>
							<Strong size={500} marginRight={24}>
								Domicilio
							</Strong>
							<Combobox
								width={150}
								items={['Santa Fe']}
								onChange={(selected) => console.log(selected)}
								placeholder="Provincia"
								// autocompleteProps={{
								//     // Used for the title in the autocomplete.
								//     title: 'Fruit'
								// }}
							/>
							<Combobox
								width={175}
								items={['Banana', 'Orange', 'Apple', 'Mango']}
								onChange={(selected) => console.log(selected)}
								placeholder="Localidad"
								// autocompleteProps={{
								//     // Used for the title in the autocomplete.
								//     title: 'Fruit'
								// }}
							/>
							<Strong size={500} marginX={16} width="auto">
								Calle y número:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Text input placeholder..."
							/>
						</Pane>
					</Pane>
					<Pane
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						marginTop={16}
						paddingBottom={24}
						marginBottom={16}
						borderBottom="default"
						// paddingLeft={24}
					>
						<Strong size={500} marginRight={24}>
							Observaciones:
						</Strong>
						<Textarea
							width={400}
							name="textarea-1"
							placeholder="Textarea placeholder..."
						/>
					</Pane>
					<Pane
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
						// paddingLeft={24}
						// paddingRight={24}
					>
						<Button height={40} intent="danger">
							Canclear
						</Button>
						<Button height={40} appearance="primary" intent="success">
							Crear
						</Button>
					</Pane>
				</Pane>
			</form>
		</Pane>
	);
};

export default AddHolder;
