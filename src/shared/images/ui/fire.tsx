import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const FireIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.67341 8.19528L10.5042 9.00027L10.9 7.9133L12.9624 2.25024C13.9579 3.07794 15.6064 4.59363 17.0008 6.56759C18.3984 8.54603 19.5 10.9266 19.5 13.5001C19.5 15.4892 18.7098 17.3969 17.3033 18.8034C15.8968 20.2099 13.9891 21.0001 12 21.0001C10.0109 21.0001 8.10322 20.2099 6.6967 18.8034C5.29018 17.3969 4.5 15.4892 4.5 13.5001C4.5 11.0882 5.44896 8.56735 7.40807 6.00043L7.40814 6.00034L7.40841 6.00059L9.67341 8.19528Z'
				fill='white'
				stroke='white'
				stroke-width='1.5'
			/>
		</svg>
	);
};
