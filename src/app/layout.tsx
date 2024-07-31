import type { Metadata } from 'next';
import '@/styles/globals.css';
import Animations from '@/lib/animations/lazy';
import { font_body, font_special } from '@/lib/fonts';
import clsx from 'clsx';

export const metadata: Metadata = {
	title: "Tim Blank's Portfolio - Full Stack Web Developer & Programmer",
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
		'rust nextjs react developer',
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
			<body className={clsx(font_body.variable, font_special.variable, font_body.className)}>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
				<Animations>{children}</Animations>
			</body>
		</html>
	);
}
