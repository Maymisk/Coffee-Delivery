import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
				<GlobalStyle />
			</CartContextProvider>
		</ThemeProvider>
	);
}
