import clsx from 'clsx/lite';
import Link from 'next/link';
import React from 'react';
import Loader from './Loader';
import { HiExternalLink } from 'react-icons/hi';

interface P extends React.HTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    href: string;
    openInNew?: boolean;
    variant?: 'Outlined' | 'Filled' | 'Opacity';
    disabled?: boolean;
    loading?: boolean;
    openInNewClassName?: string;
}

const Anchor: React.FC<P> = ({
    disabled,
    loading,
    href,
    icon,
    children,
    className,
    variant,
    openInNew,
    openInNewClassName,
    ...props
}) => {
    return (
        <Link
            tabIndex={disabled || loading ? -1 : 0}
            href={disabled || loading ? '' : href}
            target={openInNew || !!openInNewClassName ? '_blank' : '_self'}
            className={clsx(
                (disabled || loading) && 'disabled !no-underline',
                className,
                icon ? 'icon' : !variant && 'link',
                variant === 'Filled' && 'button',
                variant === 'Outlined' &&
                    'button bg-transparent! border-2! border-accent-dark! hover:border-accent! hover:bg-accent!',
                variant === 'Opacity' && 'button !bg-highlight-900/90'
            )}
            title={'Link to ' + (href === '/' ? 'homepage' : href)}
            {...props}
        >
            {loading ? (
                <>
                    <Loader className='size-4 text-link mr-1' />
                    <>{children}</>
                </>
            ) : (
                <>{children}</>
            )}
            {(openInNew || !!openInNewClassName) && (
                <HiExternalLink className={openInNewClassName ?? 'size-4'} />
            )}
        </Link>
    );
};

Anchor.displayName = 'Anchor';

export default Anchor;
