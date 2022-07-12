import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import routes from '../src/router/Router';

console.warn = console.error = () => {};

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider>
        {routing}
    </ThemeProvider>
  );
};

export default App;