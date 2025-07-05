/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: rework and remove any

'use client';

import React, { useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { clsx } from 'clsx/lite';

interface P extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    label: React.ReactNode;
    position?: 'left' | 'center' | 'right';
    flip?: 'top' | 'bottom';
}

const Tooltip: React.FC<P> = ({
    children,
    label,
    position,
    flip = 'top',
    ...props
}) => {
    const [open, setOpen] = useState(false);
    const uuid = Math.random();
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    // Handler for click on children
    function isReactElementWithOnClick(
        el: React.ReactNode
    ): el is React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }> {
        return !!(
            React.isValidElement(el) &&
            el.props &&
            typeof (el.props as React.HTMLAttributes<React.ReactNode>)
                .onClick === 'function'
        );
    }

    const handleChildrenClick = (e: React.MouseEvent) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
        timeoutRef.current = setTimeout(() => setOpen(false), 1000);
        // If children have their own onClick, call it
        if (isReactElementWithOnClick(children) && children.props.onClick) {
            children.props.onClick(e);
        }
    };

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            {...props}
        >
            <AnimatePresence>
                {open && (
                    <m.div
                        key={uuid}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={clsx(
                            'z-[100] font-bold text-xl rounded-xl pointer-events-none center absolute px-4 py-2 whitespace-nowrap bg-lowlight-800',
                            (position === 'left' || !position) && 'right-0',
                            position === 'center' && 'right-[-100%]',
                            position === 'right' && 'left-0',
                            flip === 'top' ? 'bottom-full' : 'top-full'
                        )}
                    >
                        {label}
                    </m.div>
                )}
                {React.cloneElement(children, {
                    onClick: handleChildrenClick,
                })}
            </AnimatePresence>
        </div>
    );
};

export default Tooltip;
