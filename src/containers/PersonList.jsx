import React from 'react';
import PersonItem from '../components/PersonItem';
import '../styles/PersonList.scss'
//Material Desing
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


//styles MUI
import { styled } from '@mui/material/styles';
const Root = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down('xs')]: {
	},
	[theme.breakpoints.up('sm')]: {
	},
	[theme.breakpoints.up('md')]: {
	},
	[theme.breakpoints.up('lg')]: {
	},
	[theme.breakpoints.up('xl')]: {
	},
}));


//TablePagination
function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5, width: 'max-content' }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

//PersonList
const PersonList = ({busqueda}) => {
	const rowsPersons = busqueda;
	//React state y calculo por hoja
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	// Evita un salto de diseño al llegar a la última página con filas vacías
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsPersons.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<section id='personList' className='personList'>
				<Paper elevation={3} sx={{ borderRadius: 5 }}>
					<TableContainer>
						<Table>
							<TableHead>
							<TableRow>
								<TableCell align="center">ID</TableCell>
								<TableCell align="center">Nombre y apellido</TableCell>
								<TableCell align="center">Hospital</TableCell>
								<TableCell align="center">Ingreso</TableCell>
								<TableCell align="center">Egreso</TableCell>
								<TableCell align="center">Estado</TableCell>
							</TableRow>
						</TableHead>
							<TableBody>					
								{(rowsPerPage > 0
									? rowsPersons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									: rowsPersons
								).map((row) => (
									// Llamada de component
									<TableRow key={row.id} id={row.id}>
										<PersonItem row={row}></PersonItem>
									</TableRow>									
								))}
								{/*{emptyRows > 0 && (
									<TableRow style={{ height: 53 * emptyRows }}>
										<TableCell colSpan={6} />
									</TableRow>
								)}*/}
							</TableBody>
							<TableFooter>
								<TableRow>
									{/*TABLEPAGINATION*/}
									<TablePagination id='tablePagination'
										rowsPerPageOptions={[5, 10]}
										colSpan={5}
										count={rowsPersons.length}
										rowsPerPage={rowsPerPage}
										page={page}
										SelectProps={{
											inputProps: {
												'aria-label': 'rows per page',
											},
											native: true,
										}}
										onPageChange={handleChangePage}
										onRowsPerPageChange={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</TableContainer>
				</Paper>
			</section >
		</>
	);
}

export default PersonList;
