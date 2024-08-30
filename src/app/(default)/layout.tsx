'use client';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { StyledEngineProvider } from '@mui/material';
import '../globals.css';
import 'swiper/css';
import WebApp from '@twa-dev/sdk';
import 'react-circular-progressbar/dist/styles.css';

import { inter } from '../fonts';
import Providers from '../progress.bar';
import { Suspense, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Popups from './popups';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const path = usePathname();

	useEffect(() => {
		if (!window && !WebApp?.initData) return;
		WebApp.ready();
		WebApp.expand();
		WebApp.BackButton.onClick(() => {
			router.back();
		});
	}, []);

	useEffect(() => {
		if (path === '/') {
			WebApp.BackButton.hide();
		} else {
			WebApp.BackButton.show();
		}
	}, [path]);

	return (
		<html lang='en'>
			<StyledEngineProvider injectFirst>
				<Providers />

				<body className={inter.className}>
					<main className='main'>
						<ReactNotifications />
						<Popups />
						<Header />
						<div className='content'>{children}</div>
						<Footer />
					</main>
				</body>
			</StyledEngineProvider>
		</html>
	);
}
