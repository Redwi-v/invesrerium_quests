import Link from 'next/link';
import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	return (
		<div className='bg-tone/200'>
			<div className='custom-container py-7'>
				<div className='flex justify-between border-b pb-6 mb-6 border-border'>
					<div>
						<h4 className='font-semibold text-lg leading-[100%]'>
							Investerium <br /> Quests
						</h4>
						<p className='mt-3 font-medium text-sm opacity-50'>
							Lorem ipsum dolor sit amet <br /> consectetur. Diam risus.
						</p>
					</div>
					<div className='flex gap-6'>
						<div className='ml w-[196px]'>
							<h5 className='font-medium text-sm mb-3'>Navigations</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Quests
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										NFTs
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Blockchains
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Communities
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px]'>
							<h5 className='font-medium text-sm mb-3'>Community</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										X
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Telegram
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Discord
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px]'>
							<h5 className='font-medium text-sm mb-3'>About</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Support
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Career
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px]'>
							<h5 className='font-medium text-sm mb-3'>Developers</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Analiytics
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Documentation
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50'
										href={'/'}
									>
										Github
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='flex'>
					<span className='font-medium text-sm opacity-50 w-[416px] block'>
						© {new Date().getFullYear()} Stephen King. All rights reserved.
					</span>
					<Link
						href={'/'}
						className='font-medium text-sm opacity-50 ml-6 w-[196px]'
					>
						Terms of Service
					</Link>
					<Link
						href={'/'}
						className='font-medium text-sm opacity-50 ml-6'
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</div>
	);
};
