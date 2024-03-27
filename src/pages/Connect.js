import { useNavigate } from "react-router-dom";
import { 
    TonConnectButton, 
    useTonConnectUI 
} from '@tonconnect/ui-react';
import {
    Stack,
    Container,
    Card,
    Button,
    Box,
    IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ConnectWallet = () => {
  const [ tonConnectUI ] = useTonConnectUI();
  const navigate = useNavigate();
  const currentIsConnectedStatus = tonConnectUI.connected;
  tonConnectUI.onStatusChange(wallet => {
    if(wallet == null) {
      // Not connected
    } else {
      navigate('/rent');
    }
  })
  return (
    <Container maxWidth="xl">
        <Box>
            <IconButton onClick={() => navigate('/')}>
                <ArrowBackIcon />
            </IconButton>
        </Box>
        <Stack
            justifyContent='center'
            alignItems='center'
            sx={{ pt: 2 }}
        >
          {currentIsConnectedStatus ? (
            <Card sx={{ width: 330, height: 290, p: 4 }}>
              <TonConnectButton />
              <Stack 
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Button size="small" fullWidth variant="outlined" onClick={() => navigate('/')}>Back</Button>
                <Button size="small" fullWidth variant="contained" onClick={() => navigate('/rent')}>Rent</Button>
              </Stack>
            </Card>
          ) : (
            <TonConnectButton />
          )}
        </Stack>
    </Container>
  );
};

export default ConnectWallet;
