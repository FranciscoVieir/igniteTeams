import { Routes } from './src/routes';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading/index';

export default function App() {
	const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoader ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
