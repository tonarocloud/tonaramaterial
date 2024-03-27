
import 'react-toastify/dist/ReactToastify.css';
import { TelegramProvider } from "./context/telegram";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { 
  ThemeProvider, 
  createTheme 
} from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import router from './router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://fragment.com/tonconnect-manifest.json">
      <TelegramProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <main>
            <RouterProvider router={router} />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </main>
        </ThemeProvider>
      </TelegramProvider>
    </TonConnectUIProvider>
  );
}

export default App;
