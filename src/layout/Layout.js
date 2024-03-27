import {
    Box,
    IconButton
} from '@mui/material';
import { 
    Outlet, 
    useNavigate 
} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box>
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackIcon />
                </IconButton>
            </Box>
            <Outlet />
        </>
    )
}

export default Layout;