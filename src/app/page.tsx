'use client';

import React from 'react';
import { m } from 'framer-motion';
import Carousel from './Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import Section from './Section';

const Page: React.FC = () => {
	return (
		<>
			<div className='min-h-[80dvh] center flex-col space-x-4'>
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
					<h1 className='text-[10rem] font-black uppercase mb-10 sm:mb-20'>Hey, I'm Tim</h1>
				</m.div>
				<m.div
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
					className='min-h-[20dvh]'>
					<Carousel
						className='size-full'
						slides={[
							...['/media/moon.jpeg', '/media/moon2.jpg', '/media/saul.png'].map((image) => (
								<Image
									src={image}
									alt=''
									width={0}
									height={0}
									sizes='100vw'
									draggable={false}
									className='w-[500] h-auto size-full object-cover rounded-xl sm:rounded-3xl select-none'
								/>
							)),
							<video
								className='w-[500] h-auto size-full rounded-xl sm:rounded-3xl'
								playsInline
								autoPlay
								muted
								loop
								src='/media/blackhole.mp4'
							/>,
						]}
					/>
				</m.div>
			</div>
			<div className='w-full my-20 leading-tight sm:text-4xl'>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 0.1 }}>
					I come from Germany and have found a passion
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 0.3 }}>
					for coding and developing small projects.
				</m.div>
				<hr className='h-10' />
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 0.5 }}>
					I&apos;d love to expand my experience to much larger projects.
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 0.7 }}>
					If you think you could help, let me know at my{' '}
					<Link
						href='mailto:neo@neotap.net'
						className='inline-flex gap-2 fill-link text-link hover:bg-highlight-100 rounded-xl transition-colors px-1'>
						<HiMail className='size-8' />
						<p>email</p>
					</Link>
					.
				</m.div>

				<Section
					title="Where I've been"
					data={[
						{
							name: 'Vase Oasis',
							roles: ['Lead Web & App Developer', 'Engineer'],
							link: 'https://vaseoasis.com',
							dates: {
								start: new Date(2024, 1),
								end: 'Present',
							},
							featured: true,
						},
						{
							name: 'Costellar',
							roles: ['Personal Project'],
							link: 'https://costellar.neotap.net',
							dates: {
								start: new Date(2024, 5),
								end: new Date(2024, 6),
							},
							github: 'https://github.com/neo-zip/costellar',
							featured: true,
						},
						{
							name: 'Nodur',
							link: 'https://nodur.vercel.app',
							roles: ['Web Developer', 'Full Stack'],
							dates: {
								start: new Date(2024, 5, 14),
								end: 'Present',
							},
						},
						{
							name: 'Bloodline Interactive',
							roles: ['Lead Web Developer', 'Engine Developer'],
							link: 'https://bloodline.neotap.net',
							dates: {
								start: new Date(2023, 7),
								end: 'Present',
							},
						},
						{
							name: "How's your day?",
							roles: ['Personal Project'],
							link: 'https://howsyourday.neotap.net',
							github: 'https://github.com/neo-zip/howwasmyday',
							dates: {
								start: new Date(2023, 7),
							},
						},
					]}
				/>
				<div className='flex w-full items-center flex-col'>
					<Link
						href='/clicker'
						className='label hover:underline hover:text-[var(--link)] transition-colors'>
						And maybe a super secret clicker...
					</Link>
				</div>
				<Section
					title='What I work with'
					data={[
						{
							name: 'Langauges',
							roles: ['Rust', 'Typescript', 'Python'],
						},
						{
							name: 'Frameworks',
							roles: ['React', 'Next.js'],
						},
						{
							name: 'Utilities',
							roles: ['VSC', 'Github', 'Coffee'],
						},
					]}
				/>
				<Section
					title="What I've learned"
					data={[
						{
							name: 'Languages',
							roles: ['English', 'German', 'Basic Spanish'],
						},
						{
							name: 'Actual Languages',
							roles: ['Typescript', 'Python', 'Java', 'C++'],
						},
					]}
				/>
			</div>
		</>
	);
};

export default Page;
