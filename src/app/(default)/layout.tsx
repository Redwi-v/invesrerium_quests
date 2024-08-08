'use client';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { StyledEngineProvider } from '@mui/material';
import '../globals.css';

import 'react-circular-progressbar/dist/styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { inter } from '../fonts';
import Providers from '../progress.bar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<StyledEngineProvider injectFirst>
				<body className={inter.className}>
					<Providers />
					<main className='main'>
						<Header />
						<div className='content'>{children}</div>
						<Footer />
					</main>
				</body>
			</StyledEngineProvider>
		</html>
	);
}
