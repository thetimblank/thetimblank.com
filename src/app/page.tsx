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
					<h1 className='text-[10rem] font-black font-special uppercase mb-10 sm:mb-20'>Hey, I'm Tim</h1>
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
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
					I come from Germany and have found a passion
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.3 }}>
					for coding and developing small projects.
				</m.div>
				<hr className='h-10' />
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.5 }}>
					I&apos;d love to expand my experience to much larger projects.
				</m.div>
				<m.div
					className='px-[10%]'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.7 }}>
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
							icon_path: (
								<path d='M455-48q-35 0-69.5-6.5T318-74q3-130 62-244.5T534-522q-116 60-197 161.5T214-134q-5-5-10.5-9.5T193-153q-51-51-79-116.5T86-405q0-74 29.5-140T197-663q72-72 175.5-103.5T639-795q41 1 76 16.5t62 42.5q27 27 42.5 62.5T837-597q3 161-28 264.5T707-157q-52 53-117 81T455-48Z' />
							),
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
							icon_path: (
								<path d='M224-491q32-78 75.5-149T397-776l-57-11q-31-6-61 3t-53 32L109-635q-23 23-17 55.5t36 46.5l96 42Zm646-432q-109 2-208 44T486-760q-54 54-95 115.5T318-515q-9 20-7.5 41.5T327-437l123 123q15 15 36.5 16.5T528-306q67-33 129-73.5T773-474q77-77 119-175.5T936-857q0-13-5.5-25T916-903q-9-9-21-14.5t-25-5.5ZM614-602q-21-21-21-51t21-51q21-21 51.5-21t51.5 21q21 21 21 51t-21 51q-21 21-51.5 21T614-602ZM504-212l41 97q14 31 46.5 37T648-96l117-117q23-23 32-53t3-61l-11-57q-65 54-136 97t-149 75ZM119-316q45-45 107-45t107 45q45 45 45 107t-45 107q-58 58-139.5 70T30-13q7-82 19-163.5T119-316Z' />
							),
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
