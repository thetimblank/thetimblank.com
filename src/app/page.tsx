'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import Carousel from './Carousel';
import Image from 'next/image';

const Page: React.FC = () => {
	const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

	const handleMouseMove = (e: MouseEvent) => {
		const { innerWidth: width, innerHeight: height } = window;
		const { clientX: mouseX, clientY: mouseY } = e;

		const x = (mouseX / width - 0.5) * 2;
		const y = (mouseY / height - 0.5) * 2;

		const rotateX = y * -5;
		const rotateY = x * 5;

		setTilt({ rotateX, rotateY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<>
			<div className='min-h-dvh center flex-col'>
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
					transition={{ duration: 1.5, type: 'spring', bounce: 0 }}>
					<h1 className='text-[10rem] font-bold font-special uppercase'>tim blank</h1>
				</m.div>

				<m.div
					className='w-1/2 h-1/4 p-5'
					style={{
						perspective: 1000,
						rotateX: `${tilt.rotateX}deg`,
						rotateY: `${tilt.rotateY}deg`,
					}}
					initial={{
						opacity: 0,
						y: 100,
						transformPerspective: 1200,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					whileHover={{
						scale: 1.05,
					}}
					transition={{ duration: 0.3, type: 'spring', bounce: 0 }}>
					<video
						className='object-cover size-full rounded-3xl'
						playsInline
						autoPlay
						muted
						loop
						src='/media/blackhole.mp4'
					/>
				</m.div>
			</div>

			<div className='h-dvh'>
				<Carousel
					className='w-full h-full'
					slides={[
						<div className='size-48'>
							<Image src='/media/moon.jpeg' alt='' fill className='size-full object-cover' />
						</div>,
						<div className='size-48'>
							<Image src='/media/moon2.jpg' alt='' fill className='size-full object-cover' />
						</div>,
						<div className='size-48'>
							<Image src='/media/saul.png' alt='' fill className='size-full object-cover' />
						</div>,
						<div className='size-48'>
							<Image src='/media/moon.jpeg' alt='' fill className='size-full object-cover' />
						</div>,
					]}
				/>
			</div>
		</>
	);
};

export default Page;
