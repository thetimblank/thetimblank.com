'use client';

import React from 'react';
import { m } from 'framer-motion';
import Carousel from './Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import Section, { Item } from './Section';
import Footer from './Footer';

const projects: Item[] = [
	{
		name: 'Costellar',
		roles: ['Founder'],
		image: '/media/projects/costellar.png',
		link: 'https://costellar.net',
		dates: {
			start: new Date(2024, 5),
			end: 'Present',
		},
		featured: true,
	},
	{
		name: 'Verno & Co',
		image: '/media/projects/vaseoasis.png',
		roles: ['Co-Founder'],
		link: 'https://vernoandco.com',
		dates: {
			start: new Date(2024, 11),
			end: 'Present',
		},
		featured: true,
	},
	{
		name: 'Idea Cooker',
		image: '/media/projects/ideacooker.png',
		link: 'https://costellar.neotap.net',
		roles: ['Personal Project'],
	},
	{
		name: 'Bloodline Interactive',
		roles: ['Web Developer', 'Engine Developer'],
		image: '/media/projects/bloodline.png',
		link: 'https://bloodline.neotap.net',
		dates: {
			start: new Date(2023, 7),
			end: new Date(2024, 9),
		},
	},
	{
		name: "How's your day?",
		image: '/media/projects/howwasyourday.png',
		roles: ['Personal Project'],
		link: 'https://howsyourday.neotap.net',
		github: 'https://github.com/neo-zip/howwasmyday',
		dates: {
			start: new Date(2023, 7),
		},
	},
];

const Page: React.FC = () => {
	return (
		<div className='w-[100vw] max-sm:overflow-hidden'>
			<div className='min-h-[80vh] center flex-col space-x-4'>
				<m.div
					initial={{
						opacity: 0,
						y: 100,
						transformPerspective: 1200,
						rotateX: 45,
					}}
					animate={{
						opacity: 1,
						y: 0,
						rotateX: 0,
					}}
					transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}>
					<h1 className='text-[10rem] font-black uppercase mb-10 sm:mb-20'>Hey, I&apos;m Tim</h1>
				</m.div>
				<m.div
					layout
					initial={{
						opacity: 0,
						y: 100,
						transformPerspective: 1200,
						rotateX: 5,
					}}
					animate={{
						opacity: 1,
						y: 0,
						rotateX: 0,
					}}
					transition={{ duration: 1, delay: 0.1, type: 'spring', bounce: 0.25 }}
					className='min-h-[30vh]'>
					<Carousel
						className='size-full'
						slides={projects
							.filter((i) => !!i.image)
							.map((slide, i) => (
								<div
									key={i}
									className='rounded-xl sm:rounded-3xl overflow-hidden bg-highlight-100 hover:scale-105 transition-transform cursor-pointer'>
									<Image
										src={slide.image ?? ''}
										alt=''
										width={0}
										height={0}
										sizes='100vw'
										draggable={false}
										className='w-[500] h-auto size-full object-cover select-none'
									/>
									<p className='p-5'>{slide.name}</p>
								</div>
							))}
					/>
				</m.div>
			</div>
			<div className='w-full my-20 leading-tight text-xl sm:text-4xl'>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', duration: 1, delay: 0.1, bounce: 0 }}>
					I am a German Software Developer coding small and robust
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', duration: 1, delay: 0.3, bounce: 0 }}>
					projects to improve daily life for me and hopefully others.
				</m.div>
				<hr className='h-10' />
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', duration: 1, delay: 0.5, bounce: 0 }}>
					I&apos;d love to expand my experience to much larger, more complex projects.
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', duration: 1, delay: 0.7, bounce: 0 }}>
					If you think you could help, please feel free to reach out via{' '}
					<Link
						href='mailto:contact@thetimblank.com'
						className='inline-flex items-center gap-1 align-bottom sm:gap-2 fill-link text-link hover:bg-highlight-100 rounded-xl transition-colors px-1'>
						<HiMail className='size-4 sm:size-8 align-middle' />
						<p>email</p>
					</Link>
					.
				</m.div>
				<Section
					title="Where I've been"
					className='mt-[25vh]'
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
							roles: ['Typescript'],
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
					title="What I've learned"
					data={[
						{
							name: 'Skills',
							roles: [
								'Business Management & Development',
								'Social Media Marketing',
								'Full-Stack Applications',
								'Wordpress',
								'React',
								'Fixing Computers',
							],
						},
						{
							name: 'Languages',
							roles: ['English', 'German', 'Basic Spanish', '"HTML"', '"CSS"'],
						},
						{
							name: 'Actual Languages',
							roles: ['Typescript', 'Python', 'Java', 'C++'],
						},
					]}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Page;
