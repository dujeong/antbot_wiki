// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dujeong.github.io',
	base: '/antbot_wiki',
	integrations: [
		starlight({
			title: 'AntBot Wiki',
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
				root: { label: '한국어', lang: 'ko' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ROBOTIS-move/antbot' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '1. Introduction',
					translations: { ko: '1. 소개' },
					autogenerate: { directory: 'introduction' },
				},
				{
					label: '2. Hardware',
					translations: { ko: '2. 하드웨어' },
					autogenerate: { directory: 'hardware' },
				},
				{
					label: '3. Software',
					translations: { ko: '3. 소프트웨어' },
					autogenerate: { directory: 'software' },
				},
				{
					label: '4. Quick Start',
					translations: { ko: '4. 빠른 시작' },
					autogenerate: { directory: 'quick-start' },
				},
				{
					label: '5. Development Guide',
					translations: { ko: '5. 소프트웨어 개발 가이드' },
					autogenerate: { directory: 'development-guide' },
				},
				{
					label: '6. Maintenance & Troubleshooting',
					translations: { ko: '6. 유지보수 및 트러블슈팅' },
					autogenerate: { directory: 'maintenance' },
				},
				{
					label: '7. License & Support',
					translations: { ko: '7. 라이선스 및 기술 지원' },
					autogenerate: { directory: 'license' },
				},
			],
		}),
	],
});
