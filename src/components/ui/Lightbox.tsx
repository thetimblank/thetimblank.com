/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import Image from 'next/image';
import { useFocusTrap, useHotkeys } from '@mantine/hooks';
import { HiArrowLeft, HiArrowRight, HiX } from 'react-icons/hi';

interface Item {
	image: string;
	name?: string;
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	item: Item;
	autoplay?: number;
	contextItems?: Item[];
	setAutoplayEnabled?: React.Dispatch<React.SetStateAction<number | undefined>>;
	shown: boolean;
	setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Lightbox: React.FC<P> = ({ item, contextItems, autoplay, setAutoplayEnabled, shown, setShown }) => {
	const focusTrap = useFocusTrap(shown);

	const [currentIndex, setCurrentIndex] = useState(
		contextItems ? contextItems.findIndex((current) => item.image === current.image) : 0,
	);
	const current = contextItems ? contextItems[currentIndex] : item;

	const prevImage = () => {
		if (!contextItems || contextItems.length < 1) {
			return;
		}

		setCurrentIndex((prevIndex) => (prevIndex - 1 + contextItems.length) % contextItems.length);
	};

	const nextImage = () => {
		if (!contextItems || contextItems.length < 1) {
			return;
		}

		setCurrentIndex((prevIndex) => (prevIndex + 1) % contextItems.length);
	};

	const close = () => {
		setShown(false);
	};

	useHotkeys([['esc', close]]);

	useEffect(() => {
		if (!setAutoplayEnabled || !shown) {
			return;
		}

		setAutoplayEnabled(undefined);

		return () => setAutoplayEnabled(autoplay);
	}, [shown]);

	return (
		<AnimatePresence>
			{shown && (
				<m.div
					ref={focusTrap}
					className='fixed top-0 left-0 w-screen h-screen bg-black/50 z-901 center backdrop-blur-md'
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.2,
						type: 'spring',
						bounce: 0,
					}}>
					{contextItems && contextItems.length > 1 && (
						<button
							className='flex items-center justify-start rounded-r-4xl absolute left-0 pl-5 sm:pl-10 h-full w-1/4 z-10 text-light-500 hover:text-light-900 bg-linear-to-r from-black/25 hover:from-accent/50 focus-visible:from-accent/50 transition-colors cursor-pointer outline-0'
							onClick={prevImage}>
							<HiArrowLeft className='size-5 sm:size-10' />
						</button>
					)}
					<m.div
						className='size-full center'
						initial={{ scale: 0.75 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.75 }}
						transition={{
							duration: 0.2,
							type: 'spring',
							bounce: 0,
						}}>
						<div className='size-fit'>
							<Image
								src={current.image}
								sizes='50vw'
								width={0}
								height={0}
								draggable={false}
								className='object-contain w-[95vw] sm:w-auto h-auto max-h-[95vh] min-h-125 rounded-xl'
								alt=''
							/>
							<div className='flex gap-3 absolute top-0 right-0 m-5'>
								{current.name && (
									<p className='bg-dark-900/80! backdrop-blur-none! z-10 px-4 py-2 rounded-xl text-xl text-white'>
										{current.name}
									</p>
								)}
								<button
									title={current.image}
									className='icon bg-dark-900/80! backdrop-blur-none! hover:bg-dark-900/70! text-white z-20'
									onClick={close}>
									<HiX className='size-7' />
								</button>
							</div>
						</div>
					</m.div>
					{contextItems && contextItems.length > 1 && (
						<button
							className='flex items-center justify-end rounded-l-4xl absolute right-0 pr-5 sm:pr-10 h-full w-1/4 z-10 text-light-500 hover:text-light-900 bg-linear-to-l from-black/25 hover:from-accent/50 focus-visible:from-accent/50 transition-colors cursor-pointer outline-0'
							onClick={nextImage}>
							<HiArrowRight className='size-5 sm:size-10' />
						</button>
					)}
				</m.div>
			)}
		</AnimatePresence>
	);
};

export default Lightbox;
