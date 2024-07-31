import React from 'react';

const Page: React.FC = () => {
	return (
		<div className='size-full center overflow-hidden'>
			<div className='z-20 flex flex-col gap-3 text-center'>
				<h1 className='font-body text-5xl font-bold'>thetimblank.com</h1>
				<p className='text-3xl'>I&apos;ll update this soon!</p>
			</div>
			<p className='font-special absolute text-9xl 2xl:text-[15rem] text-center text-[#0005] z-10 bottom-0'>Tim Blank</p>
		</div>
	);
};

export default Page;
