'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React, { FC, PropsWithChildren } from 'react';

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ProgressBar
				height='3px'
				color='#924FFF'
				options={{ showSpinner: true }}
				shallowRouting
			/>
		</>
	);
};

export default Providers;
