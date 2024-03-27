import { useNavigate } from "react-router-dom";
import {
    Stack,
    Typography,
    Container,
    Stepper,
    Step,
    StepLabel,
    Card,
    Button,
    Select,
    MenuItem,
    Box,
    IconButton
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['Location', 'Plan', 'OS', 'Pay'];
const operatingSystems = [
    "Ubuntu",
    "Fedora",
    "CentOS",
    "Debian",
    "Arch Linux",
    "Linux Mint",
    "openSUSE",
    "Manjaro",
    "elementary OS",
    "Kali Linux"
];

const RentOperating = () => {
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
                <Stepper activeStep={2}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Stack 
                    direction="column"  
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <ComputerIcon fontSize="large" color="primary"/>
                    <Typography size='h5'><b>Operating System</b></Typography>
                </Stack>
                <Card
                    sx={{
                        p: 3
                    }}
                >
                    <Select fullWidth defaultValue={"Ubuntu"}>
                        {operatingSystems.map( (os) => (
                            <MenuItem value={os}>{os}</MenuItem>
                        ))}
                    </Select>
                </Card>
                <Stack 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        <Button size="small" fullWidth variant="outlined" onClick={() => navigate('/rent/plan')}>Back</Button>
                        <Button size="small" fullWidth variant="contained" onClick={() => navigate('/rent/confirm')}>Continue</Button>
                    </Stack>
            </Stack>
        </Container>
    )
}

export default RentOperating;