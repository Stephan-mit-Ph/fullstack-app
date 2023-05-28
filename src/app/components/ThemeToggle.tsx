'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme('dark')}
			variant="ghost"
		>
			<Icons.Moon />
		</Button>
	);
}

export default ThemeToggle;
