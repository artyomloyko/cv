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
import AltabelLogo from '$lib/images/AltabelLogo.svelte';
import UsetechLogo from '$lib/images/UsetechLogo.svelte';
import KreoLogo from '$lib/images/KreoLogo.svelte';
import { parseDate } from '$lib/utils';

export default {
	name: 'Artyom Loiko',
	title: 'Senior Frontend Engineer',
	contacts: [
		{ title: 'loiko.artyom@gmail.com', href: 'mailto:loiko.artyom@gmail.com', Icon: Mail },
		{ title: 'www.artyom.work', href: 'https://www.artyom.work', Icon: Globe },
		{ title: 'loiko-artyom', href: 'https://linkedin.com/in/loiko-artyom', Icon: Linkedin },
		{ title: 't.me/artyom_loiko', href: 'https://t.me/artyom_loiko', Icon: Send },
		{ title: 'artyomloyko', href: 'https://github.com/ArtyomLoyko', Icon: Github }
	],
	summary: `
		<ul>
			<li>☑️ Frontend Engineer with <span class="text-foreground">${differenceInYears(new Date(), parseDate('Feb 2018'))} years</span> of experience in building high-performance web applications.</li>
			<li>☑️ Track record of delivering complex projects using <span class="text-foreground">React</span> and <span class="text-foreground">TypeScript</span> across various domains.</li>
			<li>☑️ Expert in <span class="text-foreground">modern frontend technologies</span> with <span class="text-foreground">full-stack development</span> experience.</li>
		</ul>
	`,
	skills: [
		{
			title: 'Programming Languages',
			Icon: Code,
			items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
		},
		{
			title: 'Libraries & Frameworks',
			Icon: Database,
			items: ['React', 'Next.js', 'SSR', 'Node.js', 'Express.js']
		},
		{
			title: 'State Management',
			Icon: Database,
			items: ['Redux', 'Zustand', 'React Query', 'Context API', 'Apollo Client']
		},
		{
			title: 'Styling & UI',
			Icon: Palette,
			items: ['TailwindCSS', 'Styled-components', 'SCSS', 'shadcn/ui', 'Material UI']
		},
		{
			title: 'Tools & Platforms',
			Icon: Wrench,
			items: [
				'REST',
				'GraphQL',
				'WebSocket',
				'AWS',
				'Vercel',
				'CI/CD',
				'Webpack',
				'Vite',
				'Jest',
				'Git'
			]
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
				'Developed the frontend for a <span class="text-foreground">digital assistance platform</span>, providing users with personalized recommendations, educational materials, and access to services for navigating life challenges such as oncology, bullying, domestic violence, and more.',
				'Designed and implemented the application using <span class="text-foreground">Feature-Sliced Design (FSD) architecture</span> to ensure better scalability, maintainability, and modular development.',
				'Built key features with <span class="text-foreground">Next.js</span> and <span class="text-foreground">GraphQL</span>, including dynamic content management, search functionalities, recommendations, interactive guides, and role-based authentication.',
				'Enhanced UI/UX using <span class="text-foreground">Tailwind CSS</span>, <span class="text-foreground">Shadcn</span> and <span class="text-foreground">AWS S3</span>, optimizing performance with <span class="text-foreground">server-side rendering (SSR)</span>, <span class="text-foreground">code splitting</span>, and <span class="text-foreground">efficient state management</span>.',
				'Conducted <span class="text-foreground">code reviews</span> and collaborated with <span class="text-foreground">cross-functional teams</span> in a <span class="text-foreground">Scrum</span> environment, actively contributing to sprints, stand-ups, and retrospectives for efficient feature delivery.'
			]
		},
		{
			title: 'Frontend Engineer',
			company: 'Altabel Group',
			Logo: AltabelLogo,
			dateStart: 'Feb 2023',
			dateEnd: 'Mar 2024',
			achievements: [
				'Developed and maintained a <span class="text-foreground">food ordering web application</span> from scratch, serving companies and employees to place and manage food orders efficiently.',
				'Implemented essential functionalities such as authentication, role-based access, order processing, payments, analytics, and menu creation using <span class="text-foreground">React</span>, <span class="text-foreground">TypeScript</span>, and <span class="text-foreground">React Query</span>.',
				'Improved application state management with <span class="text-foreground">Zustand</span> and designed interactive analytics dashboards using <span class="text-foreground">Chart.js</span>.',
				'Built responsive design using <span class="text-foreground">MUI</span> and <span class="text-foreground">Vite</span>, with deployment through <span class="text-foreground">AWS Amplify</span>.'
			]
		},
		{
			title: 'Frontend Engineer | Full Stack Engineer',
			company: 'Kreo Software',
			Logo: KreoLogo,
			dateStart: 'Nov 2018',
			dateEnd: 'Jan 2023',
			achievements: [
				'Contributed to multiple <span class="text-foreground">SaaS projects</span> in the construction industry, including <a href="https://www.skema.ai">Skema AI</a>, <a href="https://www.kreo.net">Kreo</a>, and <a href="https://www.youtube.com/watch?v=Km-pV_XXyWc&t=7s&ab_channel=Skema">Kreo Modular</a>.',
				'Developed complex features such as report builders, SVG-based drawing tools, real-time chats, interactive cost tables, and 3D model integrations using <span class="text-foreground">React</span>, <span class="text-foreground">Redux</span>, <span class="text-foreground">Redux-Saga</span>, and <span class="text-foreground">Styled-Components</span>.',
				'Built and maintained <span class="text-foreground">REST APIs</span> using <span class="text-foreground">Express.js</span> while integrating cloud storage with <span class="text-foreground">AWS S3</span> and working with <span class="text-foreground">DynamoDB</span>.',
				'Expanded the reusable component library, fixed bugs and wrote unit tests with <span class="text-foreground">Jest</span>.'
			]
		}
	]
};
