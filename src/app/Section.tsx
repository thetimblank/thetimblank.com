import React, { useState } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { HiClock, HiExternalLink, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Tilt from '@/components/Tilt';
import Image from 'next/image';
import { clsx } from 'clsx';

type Dates = {
	start?: Date;
	end?: Date | 'Present';
};

export interface Item {
	name: string;
	image?: string;
	description?: string;
	roles?: string[];
	link?: string;
	github?: string;
	dates?: Dates;
	featured?: boolean;
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	windowPane?: boolean;
	highlightItems?: boolean;
	title: string;
	data: Item[];
}

const ParsedDates = ({ start, end }: Dates) => {
	let parsed_start;
	let parsed_end;

	if (start) {
		parsed_start = `${start.toLocaleString('default', { month: 'long' })} ${start.getFullYear()}`;
	}

	if (end) {
		parsed_end =
			typeof end === 'string'
				? 'Present'
				: `${end.toLocaleString('default', { month: 'long' })} ${end.getFullYear()}`;
	}

	if (start && !end) {
		return <p>Started {parsed_start}</p>;
	}

	if (!start && end) {
		return <p>Ended {parsed_end}</p>;
	}

	if (start && end) {
		return (
			<p>
				{parsed_start} until {parsed_end}
			</p>
		);
	}

	return null;
};

const Section: React.FC<P> = ({ title, data, windowPane, highlightItems, ...props }) => {
	const [window, setWindow] = useState(data[0]);

	return (
		<section className='w-full my-[10dvh] flex flex-col items-center' {...props}>
			<m.div
				initial={{
					opacity: 0,
					y: 50,
					transformPerspective: 1200,
					rotateX: 15,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					rotateX: 0,
				}}
				transition={{ duration: 1.5, type: 'spring', bounce: 0 }}>
				<p className='text-5xl sm:text-7xl font-black font-title mb-10 sm:mb-20 text-center'>{title}</p>
			</m.div>
			<div
				className={clsx(
					'flex w-full',
					windowPane && 'max-xl:flex-col max-sm:gap-1 max-xl:gap-[15dvh]',
					!windowPane && 'flex-col gap-5 justify-center items-center'
				)}>
				<div
					className={clsx(
						windowPane && 'w-full xl:w-1/2 p-5 flex flex-col items-center xl:items-end',
						!windowPane && 'w-[95%] sm:w-3/4 xl:w-1/2 flex flex-col'
					)}>
					<div className='flex flex-col gap-20'>
						{data.map((item, i) => {
							return (
								<m.div
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ ease: 'anticipate', duration: 1, delay: 0.1 * i }}
									className={clsx(
										'flex flex-col gap-2',
										highlightItems && 'hover:bg-highlight-100 p-5 rounded-3xl transition-all'
									)}
									key={i}
									onMouseEnter={() => setWindow(item)}>
									<div className='flex gap-2 items-center'>
										{item.featured && (
											<m.div
												initial={{ opacity: 0, x: -50, rotate: -60 }}
												whileInView={{ opacity: 1, x: 0, rotate: 10 }}
												transition={{ duration: 1.5, type: 'spring', bounce: 0 }}
												className='xl:absolute xl:-left-16'>
												<HiStar className='fill-yellow-600 size-10' />
											</m.div>
										)}
										{item.link ? (
											<Link
												href={item.link}
												target='_blank'
												className='flex items-center gap-2 hover:text-link hover:fill-link transition-all'>
												<h3 className='text-4xl font-black font-title'>{item.name}</h3>
												<HiExternalLink className='size-10' />
											</Link>
										) : (
											<h3 className='text-4xl font-black font-title'>{item.name}</h3>
										)}
										{item.dates && (item.dates.start || item.dates.end) && (
											<Tooltip
												label={<ParsedDates start={item.dates.start} end={item.dates.end} />}>
												<div className={`${item.link ? 'hover:text-blue-500' : ''}`}>
													<HiClock className='hover:fill-link transition-all size-10 cursor-pointer' />
												</div>
											</Tooltip>
										)}
										{item.github && (
											<Tooltip label='Github Repository' className='flex'>
												<Link href={item.github} target='_blank' className='inline-flex'>
													<FaGithub className='hover:fill-link transition-all size-[35]' />
												</Link>
											</Tooltip>
										)}
									</div>
									{item.roles && item.roles.length > 0 && (
										<ul className='text-xl text-highlight-900 font-bold uppercase'>
											{item.roles.map((role, index) => (
												<li key={index}>{role}</li>
											))}
										</ul>
									)}
									{item.description && <p>{item.description}</p>}
								</m.div>
							);
						})}
					</div>
				</div>
				{windowPane && window.image && (
					<div className='w-full xl:w-1/2 p-10 max-sm:grid max-sm:place-items-center'>
						<Link
							href={window.link ?? '#'}
							title={'View ' + window.name}
							className='h-96 w-[95%] xl:w-full sticky top-[25vh] center'>
							<Tilt>
								<Image
									onClick={() => setWindow(window)}
									src={window.image}
									alt=''
									sizes='100vw'
									width={0}
									height={0}
									className='size-full object-cover rounded-xl shadow-2xl cursor-pointer'
									draggable={false}
								/>
							</Tilt>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default Section;
