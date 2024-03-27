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
    Box,
    IconButton
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { toast } from 'react-toastify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['Location', 'Plan', 'OS', 'Pay'];

const RentPayment = () => {
    const [tonConnectUI] = useTonConnectUI();
    const navigate = useNavigate();
    const myTransaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA",
                amount: "20000000",
            }
        ]
    }
    const confirmTransaction = async () => {
        try {
            const boc = await tonConnectUI.sendTransaction(myTransaction);
            navigate('/')
        } catch (error) {
            toast.error(error.message);
        }
    }
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
                <Stepper activeStep={3}>
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
                    <ReceiptIcon fontSize="large" color="primary"/>
                    <Typography size='h5'><b>Payment & Confirmation</b></Typography>
                </Stack>
                <Card
                    sx={{
                        p: 3
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                    >
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        >
                            <Typography variant='h6'>
                                Plan
                            </Typography>
                            <Typography variant='h6' color="GrayText">
                                S
                            </Typography>
                        </Stack>
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        >
                            <Typography variant='h6'>
                                Country
                            </Typography>
                            <Typography variant='h6' color="GrayText">
                                Italy
                            </Typography>
                        </Stack>
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        >
                            <Typography variant='h6'>
                                City
                            </Typography>
                            <Typography variant='h6' color="GrayText">
                                Rome
                            </Typography>
                        </Stack>
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        >
                            <Typography variant='h6'>
                                Operating System
                            </Typography>
                            <Typography variant='h6' color="GrayText">
                                Ubuntu 18.04
                            </Typography>
                        </Stack>
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        >
                            <Typography variant='h6'>
                                Monthly Price
                            </Typography>
                            <Typography variant='h6' color="GrayText">
                                $9.99
                            </Typography>
                        </Stack>
                    </Stack>
                </Card>
                <Stack 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    spacing={2}
                >
                    <Button size="small" fullWidth variant="outlined" onClick={() => navigate('/rent/plan')}>Back</Button>
                    <Button size="small" fullWidth variant="contained" onClick={confirmTransaction}>Confirm</Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default RentPayment;