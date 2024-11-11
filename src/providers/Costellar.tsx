'use client';

import clsx from 'clsx';
import { createContext, useState } from 'react';

interface C {
	setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface P extends React.HTMLAttributes<HTMLBodyElement> {
	children: React.ReactNode;
	font: string;
	className?: string;
	locked?: boolean;
}

export const CostellarContext = createContext<C>({
	setScrollLocked: () => {},
});

export const CostellarProvider: React.FC<P> = ({ children, className, locked = false, font, ...props }) => {
	const [scroll_locked, setScrollLocked] = useState(locked);

	return (
		<CostellarContext.Provider value={{ setScrollLocked }}>
			<body className={clsx('dark', scroll_locked && 'scroll-locked', font, className)} {...props}>
				{children}
			</body>
		</CostellarContext.Provider>
	);
};
