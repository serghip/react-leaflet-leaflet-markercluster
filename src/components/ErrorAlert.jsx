import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">¡Error en la acción!</Alert>
        </Stack>
    );
}