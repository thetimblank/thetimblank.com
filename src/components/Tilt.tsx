'use client';

import React, { useEffect, useState } from 'react';
import { m, HTMLMotionProps } from 'framer-motion';

interface P extends HTMLMotionProps<'div'> {
	style?: React.CSSProperties;
	children: React.ReactNode;
}

const Tilt: React.FC<P> = ({ style, children, ...props }) => {
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
		<m.div
			style={{
				...style,
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
			transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
			{...props}>
			{children}
		</m.div>
	);
};

export default Tilt;
