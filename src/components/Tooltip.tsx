import React, { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { clsx } from 'clsx/lite';

interface P extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	label: React.ReactNode;
	position?: 'left' | 'center' | 'right';
}

const Tooltip: React.FC<P> = ({ children, label, position, ...props }) => {
	const [open, setOpen] = useState(false);
	const uuid = Math.random();

	return (
		<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} {...props}>
			<AnimatePresence>
				{open && (
					<m.div
						key={uuid}
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						className={clsx(
							'z-[100] font-bold text-xl rounded-xl pointer-events-none center absolute bottom-full px-4 py-2 whitespace-nowrap bg-lowlight-800',
							(position === 'left' || !position) && 'right-0',
							position === 'center' && 'right-[-100%]',
							position === 'right' && 'left-0'
						)}>
						{label}
					</m.div>
				)}
				{children}
			</AnimatePresence>
		</div>
	);
};

export default Tooltip;
