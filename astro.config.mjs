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
			defaultLocale: 'root',
			locales: {
				root: { label: '한국어', lang: 'ko' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ROBOTIS-move/antbot' }],
			sidebar: [
				{
					label: '하드웨어 납품 가이드',
					items: [
						{ label: '제품 개요', slug: 'hardware/introduction' },
						{ label: '소프트웨어 패키지 구성', slug: 'hardware/software-packages' },
						{ label: 'Control Table', slug: 'hardware/control-table' },
						{ label: '시작하기 (Quick Start)', slug: 'hardware/quick-start' },
						{ label: '유지보수 및 트러블슈팅', slug: 'hardware/maintenance' },
						{ label: '라이선스 및 기술 지원', slug: 'hardware/license' },
					],
				},
			],
		}),
	],
});
