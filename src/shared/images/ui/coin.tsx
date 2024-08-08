import { FC } from 'react';

export const CoinIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
		>
			<g clip-path='url(#clip0_1_2872)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M10 0C15.5232 0 20 4.47676 20 10C20 15.5232 15.5232 20 10 20C4.47676 20 0 15.5232 0 10C0 4.47676 4.47676 0 10 0Z'
					fill='#F0B90B'
				/>
				<path
					d='M5.49599 9.99992L5.50321 12.6442L7.75 13.9663V15.5143L4.1883 13.4254V9.22669L5.49599 9.99992ZM5.49599 7.35569V8.89656L4.1875 8.12252V6.58166L5.49599 5.80762L6.8109 6.58166L5.49599 7.35569ZM8.6883 6.58166L9.99679 5.80762L11.3117 6.58166L9.99679 7.35569L8.6883 6.58166Z'
					fill='white'
				/>
				<path
					d='M6.44141 12.0961V10.548L7.7499 11.322V12.8629L6.44141 12.0961ZM8.6882 14.5208L9.99669 15.2948L11.3116 14.5208V16.0616L9.99669 16.8357L8.6882 16.0616V14.5208ZM13.1882 6.58166L14.4967 5.80762L15.8116 6.58166V8.12252L14.4967 8.89656V7.35569L13.1882 6.58166ZM14.4967 12.6442L14.5039 9.99993L15.8124 9.22589V13.4246L12.2507 15.5135V13.9655L14.4967 12.6442Z'
					fill='white'
				/>
				<path
					d='M13.5585 12.0962L12.25 12.863V11.3221L13.5585 10.5481V12.0962Z'
					fill='white'
				/>
				<path
					d='M13.5584 7.90389L13.5656 9.45197L11.3124 10.7741V13.4247L10.0039 14.1915L8.69541 13.4247V10.7741L6.44221 9.45197V7.90389L7.75631 7.12985L9.99589 8.45838L12.2491 7.12985L13.564 7.90389H13.5584ZM6.44141 5.26046L9.99669 3.16431L13.5584 5.26046L12.2499 6.0345L9.99669 4.70597L7.7499 6.0345L6.44141 5.26046Z'
					fill='white'
				/>
			</g>
			<defs></defs>
		</svg>
	);
};
