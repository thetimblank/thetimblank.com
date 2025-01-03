'use client';

import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronUp, HiMail } from 'react-icons/hi';
import Tooltip from '@/components/Tooltip';

const Footer: React.FC = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0.8, 1], [0.75, 1]);
	const translateY = useTransform(scrollYProgress, [0.8, 1], ['100px', '0px']);
	const rotateX = useTransform(scrollYProgress, [0.9, 1], ['10deg', '0deg']);

	return (
		<>
			<m.footer
				style={{
					scale,
					translateY,
					rotateX,
					transformPerspective: 1000,
				}}
				transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
				className='w-[calc(100%-40px)] sm:w-[calc(100%-100px)] min-h-[100vh] flex justify-center items-end rounded-3xl sm:rounded-[50px] ml-[20px] sm:ml-[50px] my-[20px] sm:mt-[50px] mb-5 overflow-hidden shadow-2xl'>
				<Image
					src={'/media/sample.png'}
					quality={90}
					fill
					alt=''
					sizes='100vw'
					className='object-cover absolute z-[1]'
				/>
				<div className='shadow-2xl absolute z-[3] top-[25%] w-[calc(100%-2vh)] sm:w-[50dvw] h-96 bg-dark-500 p-10 mt-[1vh] sm:mt-[5vh] backdrop-blur-xl rounded-3xl'>
					<div className='flex flex-col gap-3 h-full justify-between'>
						<div className='flex flex-col gap-1 text-center'>
							<p className='text-3xl md:text-5xl xl:text-6xl font-bold font-title'>
								Thanks for visiting!
							</p>
							<p className='text-xl md:text-3xl xl:text-4xl'>Get in contact:</p>
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
						transformPerspective: 1000,
					}}
					whileInView={{
						opacity: 1,
					}}
					whileHover={{
						scaleY: 6.5,
						y: '-150%',
						opacity: 0.2,
					}}
					transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
					className='absolute z-[2]'>
					<p className='text-[12.5vw] font-black text-black/80 uppercase !leading-[0.9]'>Thetimblank</p>
				</m.div>
			</m.footer>
			<div className='w-full center mb-5'>
				<Tooltip label='Back to Top' position='center'>
					<button
						className='p-1 fill-highlight-800 hover:fill-white transition-all hover:-translate-y-1'
						title='Back to Top'
						onClick={() => window.scrollTo(0, 0)}>
						<HiChevronUp className='size-10' />
					</button>
				</Tooltip>
			</div>
		</>
	);
};

export default Footer;
