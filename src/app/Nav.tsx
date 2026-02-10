'use client';

import React, { useContext } from 'react';
import Button from '@/components/ui/Button';
import { CostellarContext } from '@/providers/Costellar';
import { HiMoon, HiPause, HiPlay, HiSun } from 'react-icons/hi';
import Tooltip from '@/components/ui/Tooltip';

const Nav: React.FC = () => {
	const { prefersMotion, setPrefersMotion, theme, setTheme } = useContext(CostellarContext);

	return (
		<div className='flex gap-3 fixed top-0 right-0 m-5 z-200'>
			<Tooltip label={prefersMotion ? 'Pause Motion' : 'Resume Motion'} position='left' flip='bottom'>
				<Button icon onClick={() => setPrefersMotion((prev) => !prev)}>
					{prefersMotion ? <HiPause /> : <HiPlay />}
				</Button>
			</Tooltip>
			<Tooltip
				label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
				position='left'
				flip='bottom'>
				<Button
					icon
					onClick={() => {
						setTheme(theme === 'dark' ? 'light' : 'dark');
					}}>
					{theme === 'dark' && <HiSun />}
					{theme === 'light' && <HiMoon />}
				</Button>
			</Tooltip>
		</div>
	);
};

export default Nav;
