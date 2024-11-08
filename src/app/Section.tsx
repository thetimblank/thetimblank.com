import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { HiClock, HiExternalLink, HiStar } from 'react-icons/hi';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

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

const Section: React.FC<P> = ({ title, data }) => {
	return (
		<section className='w-full my-[10dvh] flex flex-col items-center'>
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
			<div className='w-[95%] sm:w-3/4 xl:w-1/2'>
				{data.map((item, i) => {
					return (
						<div className='flex flex-col mb-40 gap-2 relative' key={i}>
							<div className='flex gap-2 items-center'>
								{item.featured && (
									<m.div
										initial={{ opacity: 0, x: -50, rotate: -60 }}
										whileInView={{ opacity: 1, x: 0, rotate: 10 }}
										transition={{ duration: 1.5, type: 'spring', bounce: 0 }}>
										<HiStar className='fill-yellow-600 size-10' />
									</m.div>
								)}
								{item.link ? (
									<Link
										href={item.link}
										target='_blank'
										className='flex items-center gap-2 hover:text-link hover:fill-link transition-all'>
										<h3 className='text-4xl font-black font-title flex'>{item.name}</h3>
										<HiExternalLink className='size-10' />
									</Link>
								) : (
									<h3 className='leading-10 text-2xl'>{item.name}</h3>
								)}
								{item.dates && (item.dates.start || item.dates.end) && (
									<Tooltip content={<ParsedDates start={item.dates.start} end={item.dates.end} />}>
										<div className={`${item.link ? 'hover:text-blue-500' : ''}`}>
											<HiClock className='hover:fill-link transition-all size-10 cursor-pointer' />
										</div>
									</Tooltip>
								)}
								{item.github && (
									<Tooltip content='Github Repository' className='flex'>
										<Link href={item.github} target='_blank' className='inline-flex'>
											<FaGithub className='hover:fill-link transition-all size-[35]' />
										</Link>
									</Tooltip>
								)}
							</div>
							{item.roles && item.roles.length > 0 && (
								<ul className='pl-10 leading-7'>
									{item.roles.map((role, index) => (
										<li key={index}>{role}</li>
									))}
								</ul>
							)}
							{item.description && <p className='leading-7'>{item.description}</p>}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Section;
