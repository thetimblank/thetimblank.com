'use client';

import { useColorScheme } from '@mantine/hooks';
import { createContext, useState } from 'react';
import clsx from 'clsx';
import type { Theme } from '@/types/theme';

interface C {
    setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
    setPrefersMotion: React.Dispatch<React.SetStateAction<boolean>>;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    theme: Theme;
    prefersMotion: boolean;
}

interface P extends React.HTMLAttributes<HTMLBodyElement> {
    children: React.ReactNode;
    font: string;
    className?: string;
    locked?: boolean;
    defaultTheme?: Theme;
}

export const CostellarContext = createContext<C>({
    setScrollLocked: () => {},
    setTheme: () => {},
    setPrefersMotion: () => {},
    theme: 'system',
    prefersMotion: true,
});

export const CostellarProvider: React.FC<P> = ({
    children,
    className,
    locked = false,
    defaultTheme = 'system',
    font,
    ...props
}) => {
    const [scrollLocked, setScrollLocked] = useState(locked);
    const [theme, setTheme] = useState(defaultTheme);
    const [prefersMotion, setPrefersMotion] = useState(true);
    const defaultScheme = useColorScheme('dark');

    return (
        <CostellarContext.Provider
            value={{
                prefersMotion,
                theme,
                setPrefersMotion,
                setScrollLocked,
                setTheme,
            }}
        >
            <body
                className={clsx(
                    scrollLocked && 'scroll-locked',
                    font,
                    theme === 'system' ? defaultScheme : theme,
                    className
                )}
                {...props}
            >
                {children}
            </body>
        </CostellarContext.Provider>
    );
};
