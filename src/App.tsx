import { CssBaseline } from '@mui/material';
import { AppTransitions } from './routes';
import { IntlProvider } from 'react-intl';
import { translations } from './utils/translation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { SidebarProvider } from './contexts/sidebar.provider';
import ResponsiveAppBar from './components/organims/app-bar';

//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="es" messages={translations.es}>
        <HelmetProvider>
          <SidebarProvider>
            <CssBaseline />
            <ResponsiveAppBar />
            <AppTransitions />
          </SidebarProvider>
        </HelmetProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
}

export default App;
