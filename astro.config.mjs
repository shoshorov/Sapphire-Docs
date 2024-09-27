// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sapphire Design System',
			head: [
				{
					tag: 'link',
					attrs: {
					  href: 'https://kit.fontawesome.com/a70a607c0a.css',
					  crossorigin: 'anonymous',
					  rel: 'stylesheet',
					},
				  },
				
			  ],
			disable404Route: true,
			customCss: [
				// Relative path to your custom CSS file
				'./src/fonts/font-face.css',
				'./src/styles/bootstrap.scss',
				'./src/styles/base.css',
				'./src/styles/custom.scss',
			  ],
			 expressiveCode: {
				// You can set configuration options here
				//themes: ['snazzy-light'],
				styleOverrides: {
				  // You can also override styles
				  borderRadius: '0.5rem',
				  frames: {
					//shadowColor: '#124',
				  },
				},
			  },
			social: {
				
			},
			components: {
				// Override the default `SocialIcons` component.
				Hero: './src/components/HeroHome.astro',
			  },
			sidebar: [
				{ label: 'Overview', link: 'overview' },
				{ label: 'Foundations',
					items: [
						{label: 'Accessibility', slug: 'foundations/accessibility'},
						{label: 'Colors', slug: 'foundations/colors', badge:{ text: 'new', variant: 'success' }},
						{label: 'Typography', slug: 'foundations/typograhie'},
						{label: 'Icons', slug: 'foundations/icons'},
						{label: 'Grid', slug: 'foundations/grid'},
						{label: 'Elevation', slug: 'foundations/elevation'},
						{label: 'Spacing', slug: 'foundations/spacing'},
						{label: 'Figma UI Kit', slug: 'foundations/figma'},
					]
				},
				{
					label: 'Components',					
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'Accordion', slug: 'components/accordion'},
						{ label: 'Alert Messages', slug: 'components/alert'},
						{ label: 'Avatar', slug: 'components/avatar'},
						{ label: 'Badge', slug: 'components/badge'},
						{ label: 'Breadcrumb', slug: 'components/breadcrumb'},
						{ label: 'Button', slug: 'components/button'},
						{ label: 'Calendar', slug: 'components/calendar'},
						{ label: 'Cards', slug: 'components/cards'},	
						{ label: 'File Upload', slug: 'components/fileupload'},
						{ label: 'Form Elements', slug: 'components/formelements'},						
						{ label: 'List', slug: 'components/list'},
						{ label: 'Modal', slug: 'components/modal'},
						{ label: 'Pagination', slug: 'components/pagination'},
						{ label: 'Popover', slug: 'components/popover'},
						{ label: 'Preloader', slug: 'components/preloader'},
						{ label: 'Progress Bar', slug: 'components/progressbar'},						
						{ label: 'Range Slider', slug: 'components/rangeslider'},						
						{ label: 'Step Progress', slug: 'components/stepprogress'},						
						{ label: 'Table', slug: 'components/table'},
						{ label: 'Tabs', slug: 'components/tabs'},						
						{ label: 'Tooltips', slug: 'components/tooltips'},						
					],
				},
				
			],
		}),
	],
});
