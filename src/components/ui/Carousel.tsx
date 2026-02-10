'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useLightbox } from '@/providers/Lightbox';
import { useViewportSize } from '@mantine/hooks';
import Anchor from './Anchor';

interface P extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Array of image URLs to display
	 */
	items: {
		name: string;
		image: string;
		description: string;
		url: string;
	}[];
	/**
	 * Number of images visible at once in the viewport (fully visible count)
	 */
	visibleCount?: number;
	/**
	 * Gap between images, in pixels
	 */
	gap?: number;
	/**
	 * Height of images in px number
	 */
	height?: number;
	className?: string;
}

const Carousel: React.FC<P> = ({
	className,
	items,
	visibleCount: N = 1,
	gap = 64,
	height = 600,
	...props
}) => {
	const { width } = useViewportSize();
	const { openLightbox } = useLightbox();

	const clones = N + 1;
	const [index, setIndex] = useState(clones);
	const [isTransitioning, setIsTransitioning] = useState(false);

	if (width <= 1024) {
		gap /= 2;
		// height /= 2;
	}

	if (width <= 640) {
		gap /= 2;
		height /= 1.5;
	}

	const totalGap = gap * (N - 1);
	const itemWidth = (width - totalGap) / (N + 1);
	const centerOffset = (width - itemWidth) / 2;

	const extendedImages = [...items.slice(items.length - clones), ...items, ...items.slice(0, clones)];

	const current = (((index - clones) % items.length) + items.length) % items.length;

	const handleNext = () => {
		if (isTransitioning) return;
		setIndex((prev) => prev + 1);
		setIsTransitioning(true);
	};

	const handlePrev = () => {
		if (isTransitioning) return;
		setIndex((prev) => prev - 1);
		setIsTransitioning(true);
	};

	const handleDotClick = (i: number) => {
		if (isTransitioning || current === i) return;
		setIsTransitioning(true);
		setIndex(clones + i);
	};

	const handleTransitionEnd = () => {
		setIsTransitioning(false);
		if (index >= items.length + clones) {
			setIndex(clones);
		} else if (index < clones) {
			setIndex(items.length + index);
		}
	};

	return (
		<div className={clsx('w-screen py-2 overflow-x-hidden', className)} {...props}>
			<div
				className='flex'
				style={{
					gap: `${gap}px`,
					transform: `translateX(-${index * (itemWidth + gap) - centerOffset}px)`,
					transition: isTransitioning ? 'transform 0.5s ease' : 'none',
				}}
				onTransitionEnd={handleTransitionEnd}>
				{extendedImages.map((item, idx) => (
					<button
						tabIndex={0}
						key={idx}
						className='flex-none cursor-pointer transition-transform hover:scale-[1.02] rounded-3xl focusable shadow-2xl'
						style={{ width: `${itemWidth}px` }}
						onClick={() => openLightbox({ image: item.image }, items)}>
						<Image
							src={item.image}
							alt={`carousel-item-${idx}`}
							width={0}
							height={0}
							sizes='50vw'
							className={clsx('w-full object-cover rounded-3xl')}
							style={{ height }}
						/>
					</button>
				))}
			</div>

			<div className='flex justify-between w-full gap-3 mt-3 px-[25%]'>
				{width > 640 ? (
					<div className='flex flex-col gap-1 px-6 py-4 bg-light-900/40 dark:bg-dark-900/40 backdrop-blur-xl shadow-sm text-dark-500 dark:text-light-100 rounded-xl'>
						{items[current].name && (
							<p className='md:text-3xl font-title font-bold'>{items[current].name}</p>
						)}
						{items[current].url && (
							<Anchor href={items[current].url} openInNew>
								{items[current].url}
							</Anchor>
						)}
					</div>
				) : (
					<div />
				)}
				<div className='flex flex-col gap-1'>
					<div className='flex gap-3'>
						<button
							title='Left'
							className='bg-light-900/40 hover:bg-light-500/40 dark:bg-dark-900/40 dark:hover:bg-dark-500/40 backdrop-blur-xl shadow-sm text-dark-500 dark:text-light-100 rounded-xl cursor-pointer focusable size-10 center transition-colors'
							onClick={handlePrev}
							disabled={isTransitioning}>
							<HiChevronLeft className='size-6' />
						</button>

						<button
							title='Right'
							className='bg-light-900/40 hover:bg-light-500/40 dark:bg-dark-900/40 dark:hover:bg-dark-500/40 backdrop-blur-xl shadow-sm text-dark-500 dark:text-light-100 rounded-xl cursor-pointer focusable size-10 center transition-colors'
							onClick={handleNext}
							disabled={isTransitioning}>
							<HiChevronRight className='size-6' />
						</button>
					</div>
					<div className='flex rounded-md overflow-hidden'>
						{items.map((_, i) => (
							<button
								title={'Jump to slide ' + i + 1}
								key={i}
								onClick={() => handleDotClick(i)}
								className={clsx(
									'w-full h-1 transition-all focus-visible:bg-accent-dark outline-0 cursor-pointer',
									isTransitioning && 'opacity-50 cursor-not-allowed!',
									current === i
										? 'bg-accent hover:bg-accent-dark rounded-xs'
										: 'bg-lowlight-200 dark:bg-highlight-200 hover:dark:bg-highlight-300 hover:bg-lowlight-300',
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
