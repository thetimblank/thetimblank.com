'use client';

import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';

const Footer: React.FC = () => {
	return (
		<m.div
			initial={{
				opacity: 0,
				transformPerspective: 1200,
				rotateX: 15,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				rotateX: 5,
			}}
			transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
			className='w-[calc(100%-40px)] sm:w-[calc(100%-100px)] min-h-[100vh] flex justify-center items-end rounded-3xl sm:rounded-[50px] ml-[20px] sm:ml-[50px] my-[20px] sm:my-[50px] overflow-hidden shadow-2xl transition-all'>
			<Image
				src={'/media/sample.png'}
				quality={90}
				fill
				alt=''
				sizes='100vw'
				className='object-cover absolute z-[1]'
			/>
			<div className='shadow-2xl absolute z-[3] top-0 w-[calc(100%-2vh)] sm:w-[50dvw] h-96 bg-dark-500 p-10 mt-[1vh] sm:mt-[5vh] backdrop-blur-xl rounded-3xl'>
				<div className='flex flex-col gap-3 h-full justify-between'>
					<div className='flex flex-col gap-1'>
						<p className='text-3xl font-bold font-title'>Thanks for visiting.</p>
						<p className='text-xl'>Get in contact</p>
					</div>
					<Link href='mailto:contact@thetimblank.com' title='Email Me' className='icon gap-3 !px-10'>
						<HiMail className='size-20' />
						<p className='text-3xl font-title font-bold'>Email me</p>
					</Link>
				</div>
			</div>
			<m.div
				initial={{
					opacity: 0,
					transformPerspective: 1200,
					rotateX: -45,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					rotateX: 0,
				}}
				whileHover={{
					scaleY: 5.5,
					y: '-150%',
					opacity: 0.2,
				}}
				transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
				className='absolute z-[2]'>
				<p className='text-[12.5vw] font-black text-black/80 uppercase !leading-[0.9]'>Thetimblank</p>
			</m.div>
		</m.div>
	);
};

export default Footer;
