import React, { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

interface P extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	label: React.ReactNode;
}

const Tooltip: React.FC<P> = ({ children, label, ...props }) => {
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
						className='z-[100] font-bold text-xl rounded-xl pointer-events-none center absolute right-0 bottom-full px-4 py-2 whitespace-nowrap bg-lowlight-800'>
						{label}
					</m.div>
				)}
				{children}
			</AnimatePresence>
		</div>
	);
};

export default Tooltip;
