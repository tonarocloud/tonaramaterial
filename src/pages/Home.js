import { useNavigate } from "react-router-dom";
import {
    Stack,
    Typography,
    Container,
    Button,
    ButtonGroup,
    Divider,
    Card,
    IconButton
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import HistoryIcon from '@mui/icons-material/History';
import StorageIcon from '@mui/icons-material/Storage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Container maxWidth="xl" sx={{ pt: 4 }}>
            <Stack 
                direction="column"
                justifyContent="center"
                spacing={2}
            >
                    <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            pt: 4,
                            pb: 4
                        }}
                        spacing={0}
                    >
                        <Typography variant="body" color="GrayText">
                            Total balance
                        </Typography>
                        <Typography variant="h6">
                        0.00 $TONARO
                        </Typography>
                    </Stack>
                    <Stack 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        <Button size="small" fullWidth variant="outlined" onClick={() => navigate('/manage')}>Manage</Button>
                        <Button size="small" fullWidth variant="contained" onClick={() => navigate('/connect')}>Rent</Button>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button disabled size="small" startIcon={<SettingsIcon fontSize="small" />}>Settings</Button>
                        <Button onClick={() => { window.location.href = "https://t.me/tonarosupport"}} size="small" startIcon={<SupportIcon fontSize="small" />}>Support</Button>
                        <Button onClick={() => navigate('/history')} size="small" startIcon={<HistoryIcon fontSize="small" />}>History</Button>
                    </ButtonGroup>
                    <Stack 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <Typography variant="h6">
                            <StorageIcon fontSize="small" sx={{ mr: 1 }}/>Servers
                        </Typography>
                        <IconButton onClick={() => navigate('/manage')}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Card sx={{ p: 3 }}>
                        <Stack 
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <StorageIcon color="disabled"/>
                            <Typography variant="body" color="GrayText">
                                No Servers
                            </Typography>
                        </Stack>
                    </Card>
            </Stack>
        </Container>
    )
}

export default Home;