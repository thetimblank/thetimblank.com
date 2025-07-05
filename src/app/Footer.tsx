'use client';

import React, { useContext } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronUp, HiMail } from 'react-icons/hi';
import Tooltip from '@/components/ui/Tooltip';
import { FaGithub } from 'react-icons/fa';
import Iridescence from './Iridescence';
import { CostellarContext } from '@/providers/Costellar';

const Footer: React.FC = () => {
    const { prefersMotion } = useContext(CostellarContext);
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.75, 1]);
    const translateY = useTransform(
        scrollYProgress,
        [0.8, 1],
        ['100px', '0px']
    );
    const rotateX = useTransform(scrollYProgress, [0.9, 1], ['10deg', '0deg']);

    return (
        <>
            <div className='w-full px-[5vw] center'>
                <m.footer
                    style={{
                        scale,
                        translateY,
                        rotateX,
                        transformPerspective: 1000,
                    }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
                    className='w-full min-h-[85vh] flex justify-center items-end rounded-3xl sm:rounded-[50px] mb-5 overflow-hidden shadow-2xl'
                >
                    <div className='absolute z-[1] size-full rounded-3xl overflow-hidden'>
                        {prefersMotion ? (
                            <Iridescence
                                color={[1, 1, 1]}
                                mouseReact={false}
                                amplitude={0.1}
                                speed={1.0}
                            />
                        ) : (
                            <Image
                                src={'/media/sample.png'}
                                quality={90}
                                fill
                                alt=''
                                sizes='100vw'
                                className='object-cover'
                            />
                        )}
                    </div>
                    <div className='sm:shadow-2xl self-center z-10 sm:bg-light-500/50 text-black p-10 sm:backdrop-blur-xl rounded-3xl flex flex-col gap-3 items-start'>
                        <p className='text-3xl md:text-4xl xl:text-5xl font-bold font-title mb-6'>
                            Thanks for visiting!
                        </p>
                        <Link
                            href='mailto:contact@thetimblank.com'
                            title='Email Me'
                            className='flex items-center gap-1 sm:gap-3 transition-colors border-b-transparent hover:border-black border-b-2'
                        >
                            <HiMail className='size-8 sm:size-14' />
                            <p className='text-2xl sm:text-4xl font-bold'>
                                contact@thetimblank.com
                            </p>
                        </Link>
                        <Link
                            href='https://github.com/thetimblank'
                            title='Email Me'
                            className='flex items-center gap-1 sm:gap-3 transition-colors border-b-transparent hover:border-black border-b-2'
                        >
                            <FaGithub className='size-8 sm:size-14' />
                            <p className='text-2xl sm:text-4xl font-bold'>
                                Github
                            </p>
                        </Link>
                    </div>
                    <m.div
                        initial={{
                            opacity: 0,
                            transformPerspective: 1000,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{
                            scaleY: 5.8,
                            y: '-150%',
                            opacity: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            type: 'spring',
                            bounce: 0,
                        }}
                        className='absolute z-[2]'
                    >
                        <p className='text-[12vw] font-thin font-accent text-black/80 uppercase !leading-[1]'>
                            Thetimblank
                        </p>
                    </m.div>
                </m.footer>
            </div>
            <div className='w-full center mb-5'>
                <Tooltip label='Back to Top' position='center'>
                    <button
                        className='p-1 dark:text-highlight-200 text-lowlight-500 hover:dark:text-highlight-500  hover:text-lowlight-900 transition-all hover:-translate-y-1 cursor-pointer'
                        title='Back to Top'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <HiChevronUp className='size-10' />
                    </button>
                </Tooltip>
            </div>
        </>
    );
};

export default Footer;
