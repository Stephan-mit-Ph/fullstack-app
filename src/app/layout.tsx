import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn('bg-white text-slate-900 antialiased', inter.className)}
		>
			<body className="min-h-screen bg-slate-50 dark:bg-gray-900 antialiased">
				<Providers>
					{children}
					{/* @ts-expect-error Server Component*/}
					<Navbar />
				</Providers>

				{/*Allow for more mobile height */}
				<div className="h-40 md:hidden" />
			</body>
		</html>
	);
}
