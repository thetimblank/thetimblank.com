'use client';

import { useViewportSize } from '@mantine/hooks';
import clsx from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface P {
	slides: React.ReactNode[];
	className?: string;
}

// TODO: FIX MOBILE VERSION TO SHIFT VERTICALLY

const Carousel: React.FC<P> = ({ className, slides }) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isAnimating, setIsAnimating] = useState(false); // to prevent rapid clicks
	const { width } = useViewportSize();

	const leftVariants = {
		enter: (direction: number) => ({
			transformPerspective: 1200,
			x: direction > 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			rotateY: 0,
			rotateX: 0,
		}),
		center: {
			transformPerspective: 1200,
			rotateY: width > 640 ? 25 : 0, // 640 = tailwind sm window size
			rotateX: width <= 640 ? -15 : 0,
			x: 0,
		},
		exit: (direction: number) => ({
			transformPerspective: 1200,
			x: direction < 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			opacity: 0,
			rotateY: 0,
			rotateX: 0,
		}),
	};

	const swipeVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			opacity: 0,
		}),
	};

	const rightVariants = {
		enter: (direction: number) => ({
			transformPerspective: 1200,
			x: direction > 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			opacity: 0,
		}),
		center: {
			transformPerspective: 1200,
			x: 0,
			opacity: 1,
			rotateY: width > 640 ? -25 : 0, // 640 = tailwind sm window size
			rotateX: width <= 640 ? 15 : 0,
		},
		exit: (direction: number) => ({
			transformPerspective: 1200,
			x: direction < 0 ? 'calc(100% + 40px)' : 'calc(-100% - 40px)',
			opacity: 0,
			rotateY: 0,
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

	return (
		<>
			<div className={clsx('max-sm:flex-col flex items-center justify-center gap-5 sm:gap-10', className)}>
				<AnimatePresence initial={false} custom={direction} mode='popLayout'>
					{/* Left Slide */}
					<m.div
						key={`${index}-left`}
						custom={direction}
						variants={leftVariants}
						initial='enter'
						animate='center'
						exit='exit'
						onAnimationComplete={handleAnimationComplete}
						transition={{ duration: 1, type: 'spring', bounce: 0 }}
						className='center'>
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
						onAnimationComplete={handleAnimationComplete}
						transition={{ duration: 1, type: 'spring', bounce: 0 }}
						className='center'>
						{slides[index]}
					</m.div>

					{/* Right Slide */}
					<m.div
						key={`${index}-right`}
						custom={direction}
						variants={rightVariants}
						initial='enter'
						animate='center'
						exit='exit'
						onAnimationComplete={handleAnimationComplete}
						transition={{ duration: 1, type: 'spring', bounce: 0 }}
						className='center'>
						{slides[index >= slides.length - 1 ? 0 : index + 1]}
					</m.div>
				</AnimatePresence>
			</div>
			<div className='w-full my-10 center gap-1 opacity-25 hover:opacity-100 transition-opacity'>
				<button className='p-1 fill-highlight-800 hover:fill-highlight-900' onClick={handlePrev}>
					<HiChevronLeft className='size-6' />
				</button>
				{Array.from(Array(slides.length), (_, i) => (
					<div
						key={i}
						className={clsx('p-1 rounded-xl bg-highlight-300 w-7', index === i && 'bg-highlight-900')}
					/>
				))}
				<button className='p-1 fill-highlight-800 hover:fill-highlight-900' onClick={handleNext}>
					<HiChevronRight className='size-6' />
				</button>
			</div>
		</>
	);
};

export default Carousel;
