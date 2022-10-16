import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider attribute="class">
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
