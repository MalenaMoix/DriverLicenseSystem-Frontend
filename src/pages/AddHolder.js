import React, {useEffect, useState} from 'react';
import {
	Button,
	Combobox, Dialog,
	Heading,
	Pane,
	Strong,
	Switch,
	Textarea,
	TextInput,
} from 'evergreen-ui';
import moment from "moment";
import 'moment/locale/es';
import * as axios from "axios";


const AddHolder = ({history}) => {
	const [creatingHolder, setCreatingHolder] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const [holder, setHolder] = useState({
		'province': 'Santa Fe',
		'donor': false,
		'observations': ''
	});
	const DAYS = [1,2,3,4,5,6,7,8,9,10,
		11,12,13,14,15,16,17,18,19,20,
		21,22,23,24,25,26,27,28,29,30,31];
	const YEARS =  [2002,2001,2000,1999,1998,1997,
		1996,1995,1994,	1993,1992,1991,
		1990,1989,1988,	1987,1986,1985,
		1984,1983,1982,1981,1980,1979,
		1978,1977,1976,1975,1974,1973,
		1972,1971,1970,1969,1968,1967,
		1966,1965,1964,1963,1962,1961,
		1960,1959,1958,1957,1956,1955,
		1954,1953,1952,1951,1950,1949,
		1948,19471946,1945,1944,1943,
		1942,1941,1940,1939,1938,1937,
		1936,1935,1934,1933,1932,1931,
		1930,1929,1928,1927,1926,1925,
		1924,1923,1922,1921,1920,1919,
		1918,1917,1916];
	const LOCALITIES = ['Acebal','Alcorta','Alejandra',
	'Álvarez','Alvear','Arequito',
	'Armstrong','Arroyo Seco','Arteaga','Avellaneda', 'Barrancas', 'Barrio Arroyo del Medio', 'Barrio Mitre',
	'Barrios Acapulco y Veracruz', 'Berabevú', 'Bigand', 'Bombal', 'Calchaquí', 'Cañada Rosquín', 'Capitán Bermúdez',
	'Carlos Pellegrini','Casilda', 'Cayastá', 'Centeno', 'Ceres', 'Chovet', 'Coronda', 'Correa',
	'El Trébol', 'Elortondo', 'Empalme Villa Constitución', 'Estación Clucellas', 'Fighiera', 'Firmat', 'Florencia',
	'Francisco Paz', 'Franck', 'Frontera', 'Fuentes', 'Gálvez', 'General Lagos', 'Gobernador Crespo', 'Helvecia',
	'Hersilia', 'Hughes', 'Humboldt', 'Ibarlucea', 'Juan de Garay', 'La Gallareta', 'Laguna Paiva', 'Las Rosas',
	'Las Toscas', 'Lehmann', 'Llambi Campbell', 'Los Quirquinchos', 'Maciel' , 'Malabrigo', 'Margarita', 'María Juana',
	'María Susana', 'María Teresa', 'Máximo Paz', 'Melincué', 'Moisés Ville', 'Monte Oscuridad', 'Monte Vera',
	'Montes de Oca', 'Murphy', 'Nelson', 'Oliveros', 'Peyrano', 'Piamonte', 'Pilar', 'Progreso', 'Pueblo Esther',
	'Puerto Gaboto','Pujato', 'Ricardone', 'Romang','Rosario', 'Rufino', 'San Antonio de Obligado', 'San Carlos Centro',
	'San Carlos Sud', 'San Genaro', 'San Genaro Norte', 'San Gregorio', 'San Guillermo' , 'San Javier', 'San Jerónimo Norte',
	'San Jerónimo Sud', 'San Jorge', 'San José de la Esquina', 'San Justo', 'San Martín de las Escobas', 'San Vicente',
	'Sancti Spiritu', 'Santa Clara de Buena Vista', 'Santa Clara de Saguier', 'Santa Isabel', 'Santa María Norte',
	'Santa Rosa de Calchines', 'Santa Teresa','Santo Tomé', 'Sastre y Ortiz', 'Serodino', 'Suardi', 'Sunchales', 'Tacuarendí',
	'Teodelina', 'Timbúes', 'Tortugas', 'Tostado', 'Totoras', 'Vera', 'Vicente Echeverría', 'Videla', 'Villa Cañás',
	'Villa Eloísa', 'Villa Guillermina', 'Villa Minetti', 'Villa Mugueta', 'Villa Ocampo', 'Villa Trinidad', 'Wheelwright', 'Zavalla'];

	const createHolder = () =>{
		try {
			setCreatingHolder(true);
			const data={
				"document":holder.document,
				"name":holder.name,
				"lastName":holder.lastName,
				"birthDate":holder.birthDate.format('YYYY-MM-DD'),
				"address":`${holder.address}, ${holder.location}, ${holder.province}`,
				"observations":holder.observations,
				"bloodType":holder.bloodType,
				"rhFactor":holder.rhFactor,
				"donor":holder.donor,
				"gender":holder.gender,
				"licensesList":[]
			};
			console.log(data);
			
			axios.post('http://localhost:9090/owner',data).then(function (response) {
				setShowDialog(true);
				console.log(`response: ${response}`);
				setCreatingHolder(false);
			}).catch(function (error) {
				console.log(error.message);
				setCreatingHolder(false);
			})
		}catch (e) {
			console.log(e);
			setCreatingHolder(false);
		}
	}

	useEffect(()=>{
		moment.locale('es-arg');
	},[])


	return (
		<div>
			<Dialog
				isShown={showDialog}
				intent={"success"}
				title="Titular creado con exito"
				confirmLabel="Dar de alta licencia"
				onConfirm={()=> history.replace('/issueLicense')}
				onCancel={()=> history.replace('/main')}
				cancelLabel="Ir al menu principal"
			/>
		<Pane
			display="flex"
			flex={1}
			flexDirection="column"
			padding={24}
			background="tint2"
			borderRadius={3}
		>
			{/*<form>*/}
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
								Dni:
							</Strong>
							<TextInput
								width={200}
								name="dni"
								placeholder="Ingrese texto"
								marginRight={24}
								onChange={(event) => setHolder({...holder, document: event.target.value})}
								type={"number"}
							/>
						</Pane>
						<Pane display="flex" alignItems="center">
							<Strong size={500} marginRight={24}>
								Apellido:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Ingrese texto"
								marginRight={24}
								onChange={(event) => setHolder({...holder, lastName: event.target.value})}
							/>
						</Pane>
						<Pane display="flex" alignItems="center">
							<Strong size={500} marginRight={24}>
								Nombre:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Ingrese texto"
								onChange={(event) => setHolder({...holder, name: event.target.value})}
								marginRight={20}
							/>
						</Pane>
						<Pane display="flex" alignItems="center">
							<Strong size={500} marginRight={24}>
									Genero:
								</Strong>
							<Combobox
								width={120}
								items={["Masculino","Femenino"]}
								selectedItem={holder.gender}
								onChange={(selected) => setHolder({...holder, gender:selected})}
								placeholder="Genero"
							/>
						</Pane>
					</Pane>
					<Pane
						display="flex"
						alignSelf="flex-start"
						flexDirection="row"
						justifyContent="flex-start"
						marginTop={16}
					>
						<Strong size={500} marginRight={24}>
							Fecha de nacimiento:
						</Strong>
						<Combobox
							width={100}
							items={DAYS}
							selectedItem={holder.birthDate?.format('D')}
							onChange={(selected) => setHolder({...holder,
								birthDate: holder.birthDate ? holder.birthDate.date(selected) : moment().date(selected)})}
							placeholder="día"
						/>
						<Combobox
							width={130}
							items={moment.months()}
							selectedItem={holder.birthDate?.format('MMMM')}
							onChange={(selected) => setHolder({...holder,
								birthDate: holder.birthDate ? holder.birthDate.month(selected) : moment().month(selected)})}
							placeholder="Mes"
						/>
						<Combobox
							width={100}
							items={YEARS}
							selectedItem={holder.birthDate?.format('yyyy')}
							onChange={(selected) => setHolder({...holder,
								birthDate: holder.birthDate ? holder.birthDate.year(selected) : moment().year(selected)})}
							placeholder="Año"
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
								items={['O', 'A', 'B', 'AB']}
								marginRight={24}
								selectedItem={holder.bloodType}
								onChange={(selected) => setHolder({...holder,bloodType: selected})}
								placeholder="Grupo"
							/>
							<Combobox
								width={125}
								items={['-', '+']}
								placeholder="Factor RH"
								selectedItem={holder.rhFactor}
								onChange={(selected) => setHolder({...holder,rhFactor: selected})}
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
							<Switch height={24} checked={holder.donor} onChange={(event) =>
								setHolder({...holder,donor: event.target.checked})}/>
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
						>
							<Strong size={500} marginRight={24}>
								Domicilio
							</Strong>
							<Combobox
								width={150}
								items={['Santa Fe']}
								disabled
								selectedItem={holder.province}
								onChange={(selected) => setHolder({...holder, province: selected})}
								placeholder="Provincia"
							/>
							<Combobox
								width={175}
								items={LOCALITIES}
								selectedItem={holder.location}
								onChange={(selected) => setHolder({...holder, location: selected})}
								placeholder="Localidad"
							/>
							<Strong size={500} marginX={16} alignSelf={"stretch"}>
								Calle y número:
							</Strong>
							<TextInput
								name="text-input-name"
								placeholder="Ingrese texto"
								onChange={(event) => setHolder({...holder, address: event.target.value})}
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
							placeholder="Ingrese texto"
							onChange={(event) => setHolder({...holder, observations: event.target.value})}
					
						/>
					</Pane>
					<Pane
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
					>
						<Button height={40} intent="danger" onClick={ () => history.goBack()}>
							Cancelar
						</Button>
						<Button height={40} appearance="primary" intent="success"
								isLoading={creatingHolder}
								onClick={ () =>{ console.log(holder);
									createHolder();
								}}>
							Crear
						</Button>
					</Pane>
				</Pane>
			{/*</form>*/}
		</Pane>
		</div>
	);
};

export default AddHolder;
