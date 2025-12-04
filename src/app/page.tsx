'use client';

import React, { useContext } from 'react';
import { m } from 'motion/react';
import { HiMail } from 'react-icons/hi';
import Section, { Item } from './Section';
import Footer from './Footer';
import Carousel from '@/components/ui/Carousel';
import Waves from './Waves';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import clsx from 'clsx';
import { CostellarContext } from '@/providers/Costellar';
import Nav from './Nav';

const projects: Item[] = [
	{
		name: 'Costellar',
		roles: ['Founder', 'Freelancing', 'Web design company'],
		image: '/media/projects/costellar.png',
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
			end: new Date(2025, 5),
		},
	},
	// {
	// 	name: 'Eastern European United',
	// 	image: '/media/projects/eeu.png',
	// 	roles: ['Event Coordinator', 'Web Developer', 'High School Club'],
	// 	link: 'https://eeunited-org.vercel.app',
	// 	dates: {
	// 		start: new Date(2024, 7),
	// 		end: new Date(2025, 4),
	// 	},
	// },
	// {
	//     name: "How's your day?",
	//     image: '/media/projects/howwasyourday.png',
	//     roles: ['Personal Project'],
	//     link: 'https://howsyourday.neotap.net',
	//     github: 'https://github.com/neo-zip/howwasmyday',
	//     dates: {
	//         start: new Date(2023, 7),
	//     },
	// },
];

const Page: React.FC = () => {
	const { prefersMotion } = useContext(CostellarContext);

	return (
		<div className='w-screen max-sm:overflow-hidden'>
			<Nav />
			<div className='min-h-[40vh] center flex-col space-x-4 overflow-hidden'>
				<div className='absolute size-[105%] bg-linear-to-t from-light-300 dark:from-dark-100'>
					{prefersMotion ? (
						<Waves
							lineColor='#24a3f2'
							backgroundColor='#0000'
							waveSpeedX={0.02}
							waveSpeedY={0.01}
							waveAmpX={40}
							waveAmpY={20}
							friction={0.9}
							tension={0.01}
							maxCursorMove={120}
							xGap={12}
							yGap={36}
						/>
					) : (
						<Image
							src='/media/moon.png'
							quality={90}
							fill
							alt=''
							sizes='100vw'
							className='object-cover size-full -scale-y-100'
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
					transition={{ duration: 1.5, type: 'spring', bounce: 0 }}
					style={{ transformPerspective: 1200 }}>
					<h1
						className={clsx(
							'text-center text-5xl md:text-9xl font-thin font-accent uppercase my-10 sm:my-20',
							prefersMotion ? 'text-dark-100 dark:text-light-800' : 'text-white'
						)}>
						Hi, I&apos;m Tim
					</h1>
				</m.div>
			</div>
			<div className='w-full my-20 leading-tight text-xl sm:text-4xl'>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						duration: 1,
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
					cs student coding small and robust
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						duration: 1,
						delay: 0.3,
						bounce: 0,
					}}>
					projects to improve daily life for me and hopefully others!
				</m.div>
				<hr className='h-10' />
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						duration: 1,
						delay: 0.5,
						bounce: 0,
					}}>
					I&apos;d love to expand my experience to much larger, more complex projects.
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						duration: 1,
						delay: 0.7,
						bounce: 0,
					}}>
					If you think you could help, reach out at{' '}
					<Anchor href='mailto:contact@thetimblank.com'>
						<HiMail className='size-4 sm:size-8' />
						<p className='self-baseline'>contact@thetimblank.com</p>
					</Anchor>
					.
				</m.div>

				<Section
					title="Where I've been"
					className='mt-[10vh] pt-[10vh] bg-linear-to-b from-light-800 dark:from-dark-600'
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
							roles: ['Typescript', 'Python'],
						},
						{
							name: 'Frameworks',
							roles: ['Next.js'],
						},
						{
							name: 'Utilities',
							roles: ['Visual Studio Code', 'Github'],
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
								'React',
								'Fixing Computers',
								'Basic Social Media Marketing',
								'Basic Wordpress',
							],
						},
						{
							name: 'Languages',
							roles: ['English', 'German', 'Basic Spanish', '"HTML"', '"CSS"'],
						},
						{
							name: 'Actual Languages',
							roles: ['Typescript', 'Python', 'Basic Java', 'Basic C++'],
						},
					]}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Page;
