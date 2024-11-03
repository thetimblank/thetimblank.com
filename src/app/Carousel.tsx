'use client';

import clsx from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface P {
	slides: React.ReactNode[];
	className?: string;
}

const Carousel: React.FC<P> = ({ className, slides }) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isAnimating, setIsAnimating] = useState(false); // to prevent rapid clicks

	const swipeVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? '100%' : '-100%',
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction < 0 ? '100%' : '-100%',
			opacity: 0,
		}),
	};

	const handleAnimationComplete = () => setIsAnimating(false);

	const handleNext = () => {
		if (isAnimating) return;
		setDirection(1);
		setIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
		setIsAnimating(true);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setDirection(-1);
		setIndex((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
		setIsAnimating(true);
	};

	const handleSetIndex = (targetIndex: number) => {
		if (isAnimating || targetIndex === index) return;
		setDirection(targetIndex > index ? 1 : -1);
		setIndex(targetIndex);
		setIsAnimating(true);
	};

	return (
		<>
			<div className={clsx('flex items-center justify-center bg-dark-400', className)}>
				<AnimatePresence initial={false} custom={direction} mode='popLayout'>
					{/* Left Slide */}
					<m.div
						key={`${index}-left`}
						custom={direction}
						variants={swipeVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.5 },
						}}
						onAnimationComplete={handleAnimationComplete}
						className='flex mr-4 gap-1'>
						{slides[index <= 0 ? slides.length - 1 : index - 1]}
					</m.div>

					{/* Center Slide */}
					<m.div
						key={index}
						custom={direction}
						variants={swipeVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.5 },
						}}
						onAnimationComplete={handleAnimationComplete}
						className='flex mr-4 gap-1'>
						{slides[index]}
					</m.div>

					{/* Right Slide */}
					<m.div
						key={`${index}-right`}
						custom={direction}
						variants={swipeVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.5 },
						}}
						onAnimationComplete={handleAnimationComplete}
						className='flex mr-4 gap-1'>
						{slides[index >= slides.length - 1 ? 0 : index + 1]}
					</m.div>
				</AnimatePresence>
			</div>
			idx: {index}
			<div className='w-full center gap-1'>
				<button className='p-1 fill-highlight-800 hover:fill-highlight-900' onClick={handlePrev}>
					<HiChevronLeft className='size-6' />
				</button>
				{Array.from(Array(slides.length), (_, i) => (
					<button
						key={i}
						className={clsx('icon !p-1 w-7', index === i && '!bg-highlight-900')}
						onClick={() => handleSetIndex(i)}></button>
				))}
				<button className='p-1 fill-highlight-800 hover:fill-highlight-900' onClick={handleNext}>
					<HiChevronRight className='size-6' />
				</button>
			</div>
		</>
	);
};

export default Carousel;
