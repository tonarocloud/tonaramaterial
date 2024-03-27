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
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const steps = ['Location', 'Plan', 'OS', 'Pay'];
const plans = ['Plan 1', 'Plan 2', 'Plan 3']

const RentPlan = () => {
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
                <Stepper activeStep={1}>
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
                    <LocalOfferIcon fontSize="large" color="primary"/>
                    <Typography size='h5'><b>Server Plan</b></Typography>
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
                        {plans.map( (plan) => {
                            return (
                                <div>
                                    <Typography>
                                        {plan}
                                    </Typography>
                                </div>
                            )
                        })}
                    </Stack>
                </Card>
                <Stack 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        <Button size="small" fullWidth variant="outlined" onClick={() => navigate('/rent')}>Back</Button>
                        <Button size="small" fullWidth variant="contained" onClick={() => navigate('/rent/os')}>Continue</Button>
                    </Stack>
            </Stack>
        </Container>
    )
}

export default RentPlan;