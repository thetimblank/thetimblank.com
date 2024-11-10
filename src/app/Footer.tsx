'use client';

import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

const Footer: React.FC = () => {
	return (
		<div className='w-full min-h-[100dvh] flex justify-center items-end overflow-hidden'>
			<div className=''>
				<p className='text-9xl'>Text</p>
			</div>
			<Image
				src={'/media/sample.png'}
				quality={90}
				fill
				alt=''
				sizes='100vw'
				className='object-cover absolute'
			/>
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
					scaleY: 6,
					y: '-200%',
				}}
				transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
				className='absolute'>
				<p className='text-[10vw] font-black text-black/80 uppercase !leading-[0.9]'>Thetimblank.com</p>
			</m.div>
		</div>
	);
};

export default Footer;
