import { useNavigate } from "react-router-dom";
import {
    Stack,
    Typography,
    Container,
    Stepper,
    Step,
    StepLabel,
    Card,
    Divider,
    Button,
    Box,
    IconButton
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['Location', 'Plan', 'OS', 'Pay'];
const locations = ['Moscow, Russia', 'Rome, Italy', 'Paris, France', 'Frankfurt, Germany']
const RentIndex = () => {
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
                <Stepper activeStep={0}>
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
                    <LocationOnIcon fontSize="large" color="primary"/>
                    <Typography size='h5'><b>Datacenter Location</b></Typography>
                </Stack>
                <Card
                    sx={{
                        p: 3
                    }}
                >
                    <Stack 
                        direction="column"
                        justifyContent="center"
                        spacing={2}
                        divider={<Divider />}
                    >
                        {locations.map( (location) => {
                            return (
                                <div>
                                    <Typography>
                                        {location}
                                    </Typography>
                                </div>
                            )
                        })}
                    </Stack>
                </Card>
                <Button fullWidth size="small" variant="contained" onClick={() => navigate('/rent/plan')}>Continue</Button>
            </Stack>
        </Container>
    )
}

export default RentIndex;