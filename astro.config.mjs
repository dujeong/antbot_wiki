// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dujeong.github.io',
	base: '/antbot_wiki',
	integrations: [
		starlight({
			title: 'ANTBot Wiki',
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
				root: { label: '한국어', lang: 'ko' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ROBOTIS-move/antbot' }],
			sidebar: [
				{
					label: 'Hardware Delivery Guide',
					translations: { ko: '하드웨어 납품 가이드' },
					autogenerate: { directory: 'hardware' },
				},
			],
		}),
	],
});
