'use client';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { StyledEngineProvider } from '@mui/material';
import '../globals.css';
import 'swiper/css';
import WebApp from '@twa-dev/sdk';
import 'react-circular-progressbar/dist/styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { inter } from '../fonts';
import Providers from '../progress.bar';
import { useEffect } from 'react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		if (!window && !WebApp?.initData) return;
		WebApp.ready();
		WebApp.expand();
		WebApp.BackButton.show();
	}, []);

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
