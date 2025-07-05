'use client';

import React, { useContext } from 'react';
import Button from '@/components/ui/Button';
import { CostellarContext } from '@/providers/Costellar';
import { HiMoon, HiPause, HiPlay, HiRefresh, HiSun } from 'react-icons/hi';
import Tooltip from '@/components/ui/Tooltip';
import { Theme } from '@/types/theme';

const Nav: React.FC = () => {
    const { prefersMotion, setPrefersMotion, theme, setTheme } =
        useContext(CostellarContext);

    return (
        <div className='flex gap-3 fixed top-0 right-0 m-5 z-[200]'>
            <Tooltip
                label={prefersMotion ? 'Pause Motion' : 'Resume Motion'}
                position='left'
                flip='bottom'
            >
                <Button icon onClick={() => setPrefersMotion((prev) => !prev)}>
                    {prefersMotion ? <HiPause /> : <HiPlay />}
                </Button>
            </Tooltip>
            <Tooltip
                label={
                    theme === 'dark'
                        ? 'Switch to Light Theme'
                        : theme === 'light'
                        ? 'Switch to System Theme'
                        : 'Switch to Dark Theme'
                }
                position='left'
                flip='bottom'
            >
                <Button
                    icon
                    onClick={() => {
                        const themes = ['dark', 'light', 'system'];
                        const currentIndex = themes.indexOf(theme);
                        const nextTheme =
                            themes[(currentIndex + 1) % themes.length];
                        setTheme(nextTheme as Theme);
                    }}
                >
                    {theme === 'dark' && <HiSun />}
                    {theme === 'light' && <HiRefresh />}
                    {theme === 'system' && <HiMoon />}
                </Button>
            </Tooltip>
        </div>
    );
};

export default Nav;
