import React from 'react';
import { Table, TableRow, TableCell } from '@mui/material';

const PersonItem = ({ row }) => {
	return (
		<>
			<TableCell className='idPaciente'>{row.id}</TableCell>
			<TableCell className='nomyapePaciente'>{row.nomyape}</TableCell>
			<TableCell className='hospitalPaciente'>{row.nomhospital}</TableCell>			
			<TableCell className='ingresoPaciente'>{row.ingreso}</TableCell>			
			<TableCell className='egresoPaciente'>{row.egreso}</TableCell>
			<TableCell className='EstadoPaciente'>{row.estado}</TableCell>
		</>
	);
}

export default PersonItem;
