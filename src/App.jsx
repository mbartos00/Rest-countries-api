import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { cardsLoader } from './components/Cards';
import Error from './components/Error';
import CountryDetails, { countryInfoLoader } from './pages/CountryDetails';
import Home from './pages/Home';
import Root from './pages/Root';
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props =>
      props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
    color: ${props =>
      props.theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};
  }
`;

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function getInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : { mode: 'light' };
  }

  const handleSetTheme = passedTheme => {
    setTheme(passedTheme === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };

  const router = createBrowserRouter([
    {
      path: '/',
      elements: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home setTheme={handleSetTheme} />,
          loader: cardsLoader,
        },
        {
          path: '/country/:id',
          element: <CountryDetails setTheme={handleSetTheme} />,
          loader: countryInfoLoader,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className='App'>
          <RouterProvider router={router} />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
