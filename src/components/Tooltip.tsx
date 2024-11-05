import React, { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

interface P {
	children: React.ReactNode;
	content: React.ReactNode;
}

const Tooltip: React.FC<P> = ({ children, content, ...props }) => {
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
						className='z-[100] font-bold text-xl rounded-xl pointer-events-none center absolute left-0 bottom-full px-4 py-2 whitespace-nowrap bg-lowlight-800'>
						{content}
					</m.div>
				)}
				{children}
			</AnimatePresence>
		</div>
	);
};

export default Tooltip;
