import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
import { createTheme, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme();

function App() {
  const cliendId =
    "677477977184-2469va7f48cisab0o565rtd233kjp1sm.apps.googleusercontent.com";
  // const secret = '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'

  return (
    <GoogleOAuthProvider clientId={cliendId}>
      <AccountProvider>
        <ThemeProvider theme={theme}>
        <Messenger />
        </ThemeProvider>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
