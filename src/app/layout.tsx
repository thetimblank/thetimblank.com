import type { Metadata } from 'next';
import { IconProvider } from '@/providers/Icons';
import { CostellarProvider } from '@/providers/Costellar';
import clsx from 'clsx';
import { font_body, font_title } from '@/lib/fonts';
import Animations from '@/lib/animations/lazy';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Give me my money',
	description: 'Sort out your dollar issues',
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
					<Animations>{children}</Animations>
				</CostellarProvider>
			</IconProvider>
		</html>
	);
}
