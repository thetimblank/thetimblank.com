import React, { useContext, useState } from 'react';
import { m } from 'motion/react';
import Link from 'next/link';
import Tooltip from '@/components/ui/Tooltip';
import { HiClock, HiExternalLink, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Tilt from '@/components/ui/Tilt';
import Image from 'next/image';
import { clsx } from 'clsx';
import { CostellarContext } from '@/providers/Costellar';

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
	subtitle?: React.ReactNode;
	data: Item[];
}

const ParsedDates = ({ start, end }: Dates) => {
	let parsed_start;
	let parsed_end;

	if (start) {
		parsed_start = `${start.toLocaleString('default', {
			month: 'long',
		})} ${start.getFullYear()}`;
	}

	if (end) {
		parsed_end =
			typeof end === 'string'
				? 'Present'
				: `${end.toLocaleString('default', {
						month: 'long',
					})} ${end.getFullYear()}`;
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

const Section: React.FC<P> = ({ title, subtitle, data, windowPane, highlightItems, ...props }) => {
	const [window, setWindow] = useState(data[0]);
	const { prefersMotion } = useContext(CostellarContext);

	return (
		<section className='w-full my-[10vh] flex flex-col items-center' {...props}>
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
				transition={{ duration: prefersMotion ? 1.5 : 0, type: 'spring', bounce: 0 }}>
				<p
					className={clsx(
						'text-5xl sm:text-7xl font-thin italic font-accent mb-3 text-center px-5',
						!subtitle && 'mb-10 sm:mb-20',
					)}>
					{title}
				</p>
				{subtitle && <p className='text-xl sm:text-2xl mb-10 sm:mb-20 text-center px-5'>{subtitle}</p>}
			</m.div>
			<div
				className={clsx(
					'flex w-full',
					windowPane && 'max-xl:flex-col max-sm:gap-1 max-xl:gap-[15vh]',
					!windowPane && 'flex-col gap-5 justify-center items-center',
				)}>
				<div
					className={
						windowPane
							? 'w-full xl:w-1/2 p-5 flex flex-col items-center xl:items-end'
							: 'w-[95%] sm:w-3/4 xl:w-1/2 max-w-200 flex flex-col'
					}>
					<div className='flex flex-col gap-20'>
						{data.map((item, i) => {
							return (
								<m.div
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										type: 'spring',
										duration: 1,
										bounce: 0,
										delay: 0.1 * i,
									}}
									className={clsx(
										'flex flex-col gap-2',
										highlightItems &&
											'hover:bg-lowlight-200 dark:hover:bg-highlight-100 p-5 rounded-3xl transition-colors',
									)}
									key={i}
									onMouseEnter={() => setWindow(item)}>
									<div className='flex gap-2 items-center'>
										{item.featured && (
											<m.div
												initial={{
													opacity: 0,
													x: -50,
													rotate: -60,
												}}
												whileInView={{
													opacity: 1,
													x: 0,
													rotate: 10,
												}}
												transition={{
													duration: 1.5,
													type: 'spring',
													bounce: 0,
												}}
												className='xl:-ml-12'>
												<HiStar className='fill-yellow-600 size-10' />
											</m.div>
										)}
										{item.link ? (
											<Link
												href={item.link}
												target='_blank'
												className='flex items-center gap-2 hover:text-link hover:fill-link transition-colors'>
												<p className='text-2xl md:text-3xl xl:text-4xl font-black font-title'>
													{item.name}
												</p>
												<HiExternalLink className='size-10' />
											</Link>
										) : (
											<p className='text-2xl md:text-3xl xl:text-4xl font-black font-title'>
												{item.name}
											</p>
										)}
										{item.dates && (item.dates.start || item.dates.end) && (
											<Tooltip
												label={<ParsedDates start={item.dates.start} end={item.dates.end} />}>
												<div className={`${item.link ? 'hover:text-blue-500' : ''}`}>
													<HiClock className='hover:fill-link transition-colors size-10 cursor-pointer' />
												</div>
											</Tooltip>
										)}
										{item.github && (
											<Tooltip label='Github Repository' className='flex'>
												<Link
													aria-label='Link to github'
													href={item.github}
													target='_blank'
													className='inline-flex'>
													<FaGithub className='hover:fill-link transition-colors size-[35]' />
												</Link>
											</Tooltip>
										)}
									</div>
									{item.roles && item.roles.length > 0 && (
										<ul className='text-xl text-dark-100 dark:text-highlight-900 font-bold uppercase'>
											{item.roles.map((role, index) => (
												<m.li
													initial={{ x: -20, opacity: 0 }}
													whileInView={{ x: 0, opacity: 1 }}
													transition={{
														type: 'spring',
														duration: 1,
														bounce: 0,
														delay: index * 0.05,
													}}
													key={index}>
													{role}
												</m.li>
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
					<div className='w-full xl:w-1/2 max-w-250 p-10 max-sm:grid max-sm:place-items-center'>
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
