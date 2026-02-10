'use client';

import React, { useContext } from 'react';
import { m } from 'motion/react';
import { HiMail } from 'react-icons/hi';
import Section, { Item } from './Section';
import Footer from './Footer';
import Anchor from '@/components/ui/Anchor';
import clsx from 'clsx';
import { CostellarContext } from '@/providers/Costellar';
import Nav from './Nav';
import FloatingLines from './FloatingLines';
import Waves from './Waves';

const projects: Item[] = [
	{
		name: 'Costellar',
		roles: ['Founder', 'Freelancing', 'Web design company'],
		image: '/media/projects/costellar2.png',
		github: 'https://github.com/costellar-net/website',
		link: 'https://costellar.net',
		dates: {
			start: new Date(2024, 5),
			end: 'Present',
		},
	},
	{
		name: 'Naples Dental Care',
		image: '/media/projects/ndc.png',
		roles: ['Information Technology', 'Web Developer', 'Dentistry'],
		link: 'https://www.dentistofnaples.com/',
		dates: {
			start: new Date(2024, 7),
			end: new Date(2026, 0),
		},
	},
];

const Page: React.FC = () => {
	const { prefersMotion, theme } = useContext(CostellarContext);

	return (
		<main className='w-screen max-sm:overflow-hidden'>
			<Nav />
			<div className='min-h-[40vh] pb-[10vh] overflow-hidden'>
				<div className='absolute size-[105%] bg-linear-to-t to-slate-400 from-slate-100 dark:to-transparent dark:from-slate-800'>
					{theme === 'dark' ? (
						<FloatingLines
							enabledWaves={['top', 'middle', 'bottom']}
							// Array - specify line count per wave; Number - same count for all waves
							lineCount={5}
							// Array - specify line distance per wave; Number - same distance for all waves
							lineDistance={5}
							bendRadius={5}
							bendStrength={-0.5}
							interactive={prefersMotion}
							parallax={true}
							animationSpeed={prefersMotion ? 1 : 0}
						/>
					) : (
						<Waves
							maxCursorMove={prefersMotion ? 100 : 0}
							waveSpeedX={prefersMotion ? 0.05 : 0}
							waveSpeedY={prefersMotion ? 0.05 : 0}
						/>
					)}
				</div>

				<m.div
					initial={{
						opacity: 0,
						y: 100,
						scale: 0.75,
						rotateX: 90,
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1.25,
						rotateX: 10,
					}}
					transition={{ duration: 0.75, type: 'spring', bounce: 0 }}
					style={{ transformPerspective: 1200 }}
					className='center mb-[5vh] mt-[10vh] md:mt-[25vh] md:mb-[20vh]'>
					<h1
						className={clsx(
							'text-center text-5xl md:text-7xl lg:text-9xl font-thin font-accent text-dark-100 dark:text-light-800',
						)}>
						thetimblank
					</h1>
				</m.div>

				<div className='px-[10%] leading-tight text-xl sm:text-4xl'>
					<m.div
						className='drop-shadow-sm'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: 'spring',
							duration: 0.75,
							delay: 0.1,
							bounce: 0,
						}}>
						I am a german{' '}
						<Anchor
							title='University of Central Florida'
							href='https://www.ucf.edu/'
							openInNewClassName='size-4 sm:size-8'>
							UCF
						</Anchor>{' '}
						computer science student coding small and
					</m.div>
					<m.div
						className='drop-shadow-sm'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: 'spring',
							duration: 0.75,
							delay: 0.2,
							bounce: 0,
						}}>
						robust projects to improve daily life for me and hopefully others!
					</m.div>
					<hr className='h-10' />
					<m.div
						className='drop-shadow-sm'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: 'spring',
							duration: 0.75,
							delay: 0.4,
							bounce: 0,
						}}>
						I&apos;d love to expand my experience to much larger, more complex projects.
					</m.div>
					<m.div
						className='drop-shadow-sm'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: 'spring',
							duration: 0.75,
							delay: 0.5,
							bounce: 0,
						}}>
						If you think you could help, reach out at{' '}
						<Anchor href='mailto:contact@thetimblank.com'>
							<HiMail className='size-4 sm:size-8' />
							<p className='self-baseline'>contact@thetimblank.com</p>
						</Anchor>
						.
					</m.div>
				</div>
			</div>
			<div className='w-full mb-20 leading-tight text-xl sm:text-4xl'>
				<Section
					title="Where I've been"
					className='pt-[10vh] bg-linear-to-b from-light-800 dark:from-dark-600'
					data={projects}
					windowPane
					highlightItems
				/>
				<Section
					className='mt-[20vh]'
					title='What I work with'
					data={[
						{
							name: 'Langauges',
							roles: ['Typescript', 'Python', 'C++'],
						},
						{
							name: 'Technologies',
							roles: ['Next.js', 'React Native'],
						},
						{
							name: 'Utilities',
							roles: ['Visual Studio Code', 'Github', 'Notion'],
						},
					]}
				/>
				<Section
					className='mt-[10vh] pt-[10vh] bg-linear-to-b from-light-800 dark:from-dark-400'
					title="What I've learned"
					subtitle={
						<>
							You can email{' '}
							<Anchor href='mailto:contact@thetimblank.com'>contact@thetimblank.com</Anchor> for my
							resume.
						</>
					}
					data={[
						{
							name: 'Skills',
							roles: [
								'Business Management & Development',
								'Full-Stack Applications',
								'React, Next.js, tailwind, firebase, shadcn',
								'Mobile Apps (react native, nativewind)',
								'Wordpress, Wix, etc.',
								'IT - all around, administrative, support, networking, etc.',
								// 'Basic Social Media Marketing',
							],
						},
						{
							name: 'Languages',
							roles: ['English', 'German', 'Basic Spanish', '"HTML"', '"CSS"'],
						},
						{
							name: 'Actual Languages',
							roles: ['Typescript', 'Python', 'C++', 'Basic C', 'Basic Java'],
						},
					]}
				/>
			</div>
			<Footer />
		</main>
	);
};

export default Page;
