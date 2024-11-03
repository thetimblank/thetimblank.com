import Image from 'next/image';
import saul from '/public/saul.png';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Who do you call?',
	description: 'SAUL!!!',
	themeColor: '#219ede',
	openGraph: {
		siteName: 'neotap',
		images: [
			{
				url: 'https://neotap.net/saul.png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
	},
};

const Page: React.FC = () => {
	return (
		<div className='size-full'>
			<Image src={saul} alt='none' sizes='100vw' fill className='object-fill' />
		</div>
	);
};
export default Page;
