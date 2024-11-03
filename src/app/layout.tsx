import type { Metadata } from 'next';
import { IconProvider } from '@/providers/Icons';
import { CostellarProvider } from '@/providers/Costellar';
import clsx from 'clsx';
import { font_body, font_title } from '@/lib/fonts';
import Animations from '@/lib/animations/lazy';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'THE TIM BLANK',
	description:
		"A professional portfolio focused on me, Tim Blank. I specialize in making custom web apps and websites, and I have coding experience in TypeScript, Java, Python, Rust. I'm well-versed in frameworks like React and Next.js. Explore my projects to see my expertise in action.",
	keywords: [
		'full stack, front end, backend developer',
		'software engineer portfolio to hire',
		'web developer',
		'portfolio',
		'creative coder',
		'programmer',
		'Tim Blank',
		'web development',
		'unique projects',
		'typescript',
		'c c++ nextjs react developer',
	],
};

const schema = {
	'@context': 'http://schema.org',
	name: 'Tim Blank',
	url: 'https://thetimblank.com',
	logo: 'https://thetimblank.com/favicon.ico',
	contactPoint: {
		'@type': 'ContactPoint',
		email: 'contact@thetimblank.com',
		areaServed: 'US',
		availableLanguage: 'English',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<IconProvider>
				<CostellarProvider font={clsx(font_body.variable, font_title.variable, font_body.className)}>
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
					/>
					<Animations>{children}</Animations>
				</CostellarProvider>
			</IconProvider>
		</html>
	);
}
