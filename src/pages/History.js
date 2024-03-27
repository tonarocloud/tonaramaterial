import { useNavigate } from "react-router-dom";
import {
    Stack,
    Container,
    Box,
    IconButton,
    Card,
    Typography
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HistoryIcon from '@mui/icons-material/History';

const History = () => {
    const navigate = useNavigate();
    
    return (
        <Container maxWidth="xl">
            <Box>
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackIcon />
                </IconButton>
            </Box>
            <Stack 
                direction="column"
                justifyContent="center"
                spacing={2}
                sx={{ pt: 2 }}
            >
                <Card sx={{ p: 3 }}>
                    <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <HistoryIcon color="disabled"/>
                        <Typography variant="body" color="GrayText">
                            No History
                        </Typography>
                    </Stack>
                </Card>
            </Stack>
        </Container>
    )
}

export default History;