import { differenceInYears } from 'date-fns';
import {
	Mail,
	Globe,
	Code,
	Github,
	Linkedin,
	Database,
	Wrench,
	Send,
	Palette
} from 'lucide-svelte';
import AltabelLogo from '$lib/images/altabel-logo.svelte';
import UsetechLogo from '$lib/images/usetech-logo.svelte';
import KreoLogo from '$lib/images/kreo-logo.svelte';

const firstJobDateStart = 'Nov 2018';

export const CV = {
	name: 'Artyom Loiko',
	title: 'Senior Frontend Engineer',
	contacts: [
		{ title: 'loiko.artyom@gmail.com', href: 'mailto:loiko.artyom@gmail.com', Icon: Mail },
		{ title: 'artyomloyko.github.io', href: 'https://yourwebsite.com', Icon: Globe },
		{ title: 'loiko-artyom', href: 'https://linkedin.com/in/loiko-artyom', Icon: Linkedin },
		{ title: 't.me/loiko_artyom', href: 'https://t.me/loiko_artyom', Icon: Send },
		{ title: 'artyomloyko', href: 'https://github.com/ArtyomLoyko', Icon: Github }
	],
	summary: `Senior Frontend Engineer with <span class="font-semibold text-foreground">${differenceInYears(new Date(), new Date(firstJobDateStart))}+ years</span> of experience specializing in building <span class="font-semibold text-foreground">scalable, high-performance web applications</span>. Expert in <span class="font-semibold text-foreground">React ecosystem</span> and <span class="font-semibold text-foreground">modern JavaScript</span>, with a strong focus on creating exceptional user experiences. Proven track record of delivering complex projects using <span class="font-semibold text-foreground">Next.js</span>, <span class="font-semibold text-foreground">TypeScript</span>, and <span class="font-semibold text-foreground">GraphQL</span>. Passionate about <span class="font-semibold text-foreground">web performance optimization</span> and implementing <span class="font-semibold text-foreground">best practices</span> in frontend architecture.`,
	skills: [
		{
			title: 'Stack',
			Icon: Code,
			items: ['React & Next.js', 'TypeScript', 'HTML5 & CSS3', 'Express.js']
		},
		{
			title: 'State',
			Icon: Database,
			items: ['Redux & Redux Toolkit', 'React Query', 'Zustand', 'Context API']
		},
		{
			title: 'Styles',
			Icon: Palette,
			items: ['TailwindCSS', 'Styled-components', 'shadcn', 'Material UI']
		},
		{
			title: 'Tools',
			Icon: Wrench,
			items: ['REST & GraphQL', 'Jest & Testing Library', 'Git & CI/CD', 'Webpack & Vite']
		}
	],
	experience: [
		{
			title: 'Senior Frontend Engineer',
			company: 'Usetech',
			Logo: UsetechLogo,
			dateStart: 'Mar 2024',
			dateEnd: 'Present',
			achievements: [
				'Led the frontend development of a <span class="font-semibold text-foreground">complex help platform</span>, implementing content management systems and search functionality using <span class="font-semibold text-foreground">Next.js</span> and <span class="font-semibold text-foreground">GraphQL</span>',
				'Optimized application performance resulting in a <span class="font-semibold text-foreground">40% improvement</span> in load times and <span class="font-semibold text-foreground">Core Web Vitals</span> metrics',
				'Implemented <span class="font-semibold text-foreground">responsive design patterns</span> and <span class="font-semibold text-foreground">accessibility features</span>, ensuring <span class="font-semibold text-foreground">WCAG 2.1</span> compliance',
				'<span class="font-semibold text-foreground">Mentored junior developers</span> and conducted <span class="font-semibold text-foreground">code reviews</span> to maintain high code quality standards'
			]
		},
		{
			title: 'Frontend Engineer',
			company: 'Altabel Group',
			Logo: AltabelLogo,
			dateStart: 'Feb 2023',
			dateEnd: 'Mar 2024',
			achievements: [
				'Developed and maintained a <span class="font-semibold text-foreground">large-scale food ordering platform</span> serving multiple companies across Northern Europe',
				'Built <span class="font-semibold text-foreground">reusable component library</span> reducing development time by <span class="font-semibold text-foreground">30%</span> for new features',
				'Implemented <span class="font-semibold text-foreground">real-time order tracking</span> and analytics dashboard using <span class="font-semibold text-foreground">WebSocket</span> and <span class="font-semibold text-foreground">Chart.js</span>',
				'Collaborated with UX team to improve user engagement metrics by <span class="font-semibold text-foreground">25%</span>'
			]
		},
		{
			title: 'Full Stack Engineer',
			company: 'Kreo Software',
			Logo: KreoLogo,
			dateStart: firstJobDateStart,
			dateEnd: 'Jan 2023',
			achievements: [
				'Architected and developed frontend solutions for enterprise clients using <span class="font-semibold text-foreground">React</span> and <span class="font-semibold text-foreground">TypeScript</span>',
				'Implemented <span class="font-semibold text-foreground">CI/CD pipelines</span> reducing deployment time by <span class="font-semibold text-foreground">50%</span>',
				'Led migration from legacy codebase to <span class="font-semibold text-foreground">modern React patterns</span> and hooks',
				'Integrated multiple <span class="font-semibold text-foreground">third-party APIs</span> and services while maintaining high performance'
			]
		}
	]
};
