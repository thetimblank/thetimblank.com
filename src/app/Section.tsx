import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';

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
		<section className='w-full mb-[25vh]'>
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
				<p className='text-7xl font-black font-title mb-10 sm:mb-20'>{title}</p>
			</m.div>
			{data.map((item, i) => {
				return (
					<div className='flex flex-col w-full mb-40 gap-2 relative' key={i}>
						{item.featured && (
							<m.svg
								initial={{ opacity: 0, x: 150, rotate: 120 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, x: 0, rotate: 10 }}
								transition={{ duration: 2, type: 'spring' }}
								className='absolute right-0 top-[-5px] scale-12 md:right-[-40%] md:top-1/4 md:scale-[2/3] fill-yellow-600'
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 -960 960 960'
								width='24'>
								<path d='M480-231 311-129q-18 11-37 9.5T241-132q-14-11-21.5-28t-2.5-37l45-192-150-130q-16-14-20-32t1-35q5-17 19.5-29t35.5-14l197-17 77-182q8-20 24-29t34-9q18 0 34 9t24 29l77 182 197 17q21 2 35.5 14t19.5 29q5 17 1 35t-20 32L698-389l45 192q5 20-2.5 37T719-132q-14 11-33 12.5t-37-9.5L480-231Z' />
							</m.svg>
						)}
						<div className='flex gap-5 items-center'>
							{item.link ? (
								<Link
									href={item.link}
									target='_blank'
									className='flex items-center gap-5 hover:text-blue-500'>
									<h3 className='leading-10 text-2xl'>{item.name}</h3>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										height='24px'
										viewBox='0 -960 960 960'
										width='24px'>
										<path d='M212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h205q26 0 44.5 18.5T480-811q0 26-18.5 44.5T417-748H212v536h536v-205q0-26 18.5-44.5T811-480q26 0 44.5 18.5T874-417v205q0 53-36.5 89.5T748-86H212Zm536-575L462-375q-18 18-43 17.5T376-376q-18-18-18-43.5t18-43.5l285-285h-38q-26 0-44.5-18.5T560-811q0-26 18.5-44.5T623-874h188q26 0 44.5 18.5T874-811v188q0 26-18.5 44.5T811-560q-26 0-44.5-18.5T748-623v-38Z' />
									</svg>
								</Link>
							) : (
								<h3 className='leading-10 text-2xl'>{item.name}</h3>
							)}
							{item.dates && (item.dates.start || item.dates.end) && (
								<Tooltip content={<ParsedDates start={item.dates.start} end={item.dates.end} />}>
									<svg
										tabIndex={0}
										className={`${item.link ? 'hover:text-blue-500' : ''}`}
										xmlns='http://www.w3.org/2000/svg'
										height='24'
										viewBox='0 -960 960 960'
										width='24'>
										<path d='M535-504v-116q0-23.38-15.81-39.19Q503.38-675 480-675q-23.37 0-39.19 15.81Q425-643.38 425-620v136q0 13 4.5 24.07T443-440l116 116q16 16 38 16t39-16q17-16 17-39t-17-40L535-504ZM480-46q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
									</svg>
								</Tooltip>
							)}
							{item.github && (
								<Tooltip content='Github Repository'>
									<Link
										href={item.github}
										target='_blank'
										className='flex items-center gap-5 hover:text-blue-500'>
										<svg
											tabIndex={0}
											xmlns='http://www.w3.org/2000/svg'
											height='24'
											viewBox='0 0 50 50'
											width='24'>
											<path d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.4-1.6-2-1.6-2c-1.3-0.9-0.1-0.8,0.1-0.8h0.1c0.8,0,1.5,0.5,2.1,1.3C14,36.5,15.3,37,16.7,37c1.3,0,2.3-0.2,2.9-0.4c0.3-1,0.9-1.9,1.6-2.5c-3.4-0.4-6.9-1.7-6.9-7.7c0-1.7,0.6-3.2,1.5-4.4C14.5,20.3,14.1,19,14.9,17c0,0,1.3-0.4,4.2,1.6c1.3-0.4,2.7-0.6,4.2-0.6c1.4,0,2.9,0.2,4.2,0.6c2.9-2,4.2-1.6,4.2-1.6c0.8,2,0.4,3.3,0.2,3.7c0.9,1.2,1.4,2.6,1.4,4.3c0,6-3.5,7.3-6.9,7.7C31,34,31.7,36,31.7,37v8c0,1,0.5,1.7,1.3,2C28.996,48.936,25.596,49.936,22,50C21.2,50,18,48,17.8,46.8L17.791,46.836z' />
										</svg>
									</Link>
								</Tooltip>
							)}
						</div>
						{item.roles && item.roles.length > 0 && (
							<ul className='list-disc pl-10 leading-7'>
								{item.roles.map((role, index) => (
									<li key={index}>{role}</li>
								))}
							</ul>
						)}
						{item.description && <p className='leading-7'>{item.description}</p>}
					</div>
				);
			})}
		</section>
	);
};

export default Section;
