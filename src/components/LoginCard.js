import { Box, Typography, Card, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { GoogleLogin } from '@react-oauth/google';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/user/userslice';

export default function LoginCard(props) {
    const dispatch = useDispatch();

    function responseMessage(response) {
        const jwt = response.credential

        // Decode the JWT
        const body = jwt.split('.')[1];
        const decoded = atob(body);
        const user = JSON.parse(decoded);

        dispatch(setUser({
            id: user.sub,
            name: user.name,
            email: user.email,
            picture: user.picture
        }));

        props.onClose();
    }

    function errorMessage(error) {
        console.error(error);
    }

    return (
        <Card>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <IconButton onClick={() => props.onClose()}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Box sx={{
                padding: 2,
                paddingTop: 0
            }}>
                <Typography variant="h6" gutterBottom>Login</Typography>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </Box>
        </Card>
    )
}