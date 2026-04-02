import Image from 'next/image';
import { Heading, Flex, Text, Button, RevealFx, Tag } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, person, routes, skills, social } from '@/app/resources'
import { Posts } from '@/app/blog/components/Posts';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			{/* Hero Section */}
			<Flex
				fillWidth
				alignItems="center"
				justifyContent="center"
				className="hero-section"
				style={{ position: 'relative' }}>

				<style>{`
					.hero-section {
						height: calc(100vh - 7rem);
						min-height: 520px;
					}
					.hero-inner {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						gap: 3rem;
						width: 100%;
						max-width: 860px;
					}
					.hero-text { flex: 1; max-width: 520px; display: flex; flex-direction: column; gap: 1rem; overflow: visible; }
					.hero-photo-wrapper {
						flex-shrink: 0;
						width: 220px;
						height: 220px;
						border-radius: 50%;
						opacity: 0;
						animation: heroGlowReveal 2s ease-in-out 0.2s forwards;
						box-shadow:
							0 0 40px 12px color-mix(in srgb, var(--brand-solid-strong) 35%, transparent),
							0 0 80px 30px color-mix(in srgb, var(--brand-solid-strong) 15%, transparent);
					}
					.hero-photo {
						width: 220px;
						height: 220px;
						border-radius: 50%;
						overflow: hidden;
						position: relative;
						border: 1px solid var(--neutral-border-strong);
					}
					@keyframes heroGlowReveal {
						from { opacity: 0; }
						to   { opacity: 1; }
					}

					@media (max-width: 768px) {
						.hero-section {
							height: calc(100vh - 2rem);
							min-height: 0;
						}
						.hero-inner {
							flex-direction: column;
							align-items: center;
							text-align: center;
							gap: 1.5rem;
							padding: 80px 1rem 80px;
						}
						.hero-photo-wrapper {
							order: 0;
							width: 180px;
							height: 180px;
							box-shadow:
								0 0 30px 8px color-mix(in srgb, var(--brand-solid-strong) 35%, transparent),
								0 0 60px 20px color-mix(in srgb, var(--brand-solid-strong) 15%, transparent);
						}
						.hero-photo { width: 180px; height: 180px; }
						.hero-text { order: 1; align-items: center; }
					}
				`}</style>

				<div className="hero-inner">
					{/* Text */}
					<div className="hero-text">
						<RevealFx translateY="4">
							<Text variant="body-default-m" onBackground="brand-weak">
								{person.role}
							</Text>
						</RevealFx>
						<RevealFx translateY="8" delay={0.1} style={{ marginBottom: '-1.25rem' }}>
							<div style={{ paddingBottom: '1.25rem' }}>
								<Heading wrap="balance" variant="display-strong-xl">
									{person.name}
								</Heading>
							</div>
						</RevealFx>
						<RevealFx translateY="8" delay={0.2}>
							<Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
								Detail oriented software engineer building full-stack applications, cloud-native backends and AI-powered platforms. With a focus on real-time systems and production deployments on AWS and GCP.
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.3}>
							<Flex gap="12" paddingTop="s" wrap>
								<Button href="/work" variant="primary" size="m">View Projects</Button>
								<Button href="/about" variant="secondary" size="m">About Me</Button>
							</Flex>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Flex gap="8" paddingTop="4" wrap>
								{social.map((item) => (
									item.link && (
										<Button key={item.name} href={item.link} prefixIcon={item.icon} label={item.name} size="s" variant="tertiary"/>
									)
								))}
							</Flex>
						</RevealFx>
					</div>

					{/* Photo */}
					<div className="hero-photo-wrapper">
						<RevealFx translateY="8" delay={0.2}>
							<div className="hero-photo">
								<Image
									src={person.avatar}
									alt={person.name}
									fill
									style={{ objectFit: 'cover', objectPosition: 'center top' }}
									sizes="220px"
								/>
							</div>
						</RevealFx>
					</div>
				</div>

				{/* Scroll indicator */}
				<Flex
					style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
					direction="column" alignItems="center" gap="8">
					<Text variant="body-default-xs" onBackground="neutral-weak">scroll</Text>
					<svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ opacity: 0.4 }}>
						<path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Flex>
			</Flex>
			<style>{`
				@keyframes flyUp {
					from { opacity: 0; transform: translateY(4rem); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes flyUpCard {
					from { opacity: 0; transform: translateY(3rem); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@supports (animation-timeline: view()) {
					.scroll-reveal {
						animation: flyUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
						animation-timeline: view();
						animation-range: entry 0% entry 35%;
					}
					.card-reveal {
						animation: flyUpCard 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
						animation-timeline: view();
						animation-range: entry 0% entry 40%;
					}
					.card-reveal:nth-child(2) { animation-range: entry 8% entry 48%; }
					.card-reveal:nth-child(3) { animation-range: entry 16% entry 56%; }
					.card-reveal:nth-child(4) { animation-range: entry 24% entry 64%; }
				}
			`}</style>

			{/* Experience Section */}
			<Flex fillWidth direction="column" gap="l" paddingY="xl" className="scroll-reveal">
				<Heading as="h2" variant="display-strong-s" align="center">
					Recent Experience
				</Heading>
				<Flex direction="column" fillWidth gap="m">
					{about.work.experiences.slice(0, 1).map((experience, index) => (
						<Flex
							key={index}
							direction="column"
							fillWidth
							padding="l"
							gap="s"
							border="neutral-medium"
							borderStyle="solid-1"
							radius="l"
							style={{
								backdropFilter: 'blur(12px)',
								WebkitBackdropFilter: 'blur(12px)',
								background: 'color-mix(in srgb, var(--neutral-background-strong) 40%, transparent)',
							}}>
							<Flex fillWidth justifyContent="space-between" alignItems="flex-start" mobileDirection="column" gap="4">
								<Flex direction="column" gap="4">
									<Text variant="heading-strong-l">{experience.company}</Text>
									<Text variant="body-default-s" onBackground="brand-weak">{experience.role}</Text>
								</Flex>
								<Text variant="body-default-s" onBackground="neutral-weak">{experience.timeframe}</Text>
							</Flex>
							<Flex as="ul" direction="column" gap="8" paddingTop="s">
								{experience.achievements.map((achievement, i) => (
									<Text as="li" variant="body-default-m" key={i}>
										{achievement}
									</Text>
								))}
							</Flex>
						</Flex>
					))}
				</Flex>
			</Flex>

			{/* Technical Skills Section */}
			<Flex fillWidth direction="column" gap="l" paddingBottom="xl" className="scroll-reveal">
				<Heading as="h2" variant="display-strong-s" align="center">
					Technical Skills
				</Heading>
				<Flex fillWidth wrap gap="m">
					{skills.categories.map((category, index) => (
						<Flex
							key={index}
							direction="column"
							gap="s"
							padding="l"
							border="neutral-medium"
							borderStyle="solid-1"
							radius="l"
							className="card-reveal"
							style={{
								flex: '1 1 280px',
								boxSizing: 'border-box',
								minWidth: 0,
								backdropFilter: 'blur(12px)',
								WebkitBackdropFilter: 'blur(12px)',
								background: 'color-mix(in srgb, var(--neutral-background-strong) 40%, transparent)',
							}}>
							<Text variant="heading-strong-m">{category.title}</Text>
							<Flex wrap gap="8">
								{category.items.map((item, i) => (
									<Tag key={i} size="m">{item}</Tag>
								))}
							</Flex>
						</Flex>
					))}
				</Flex>
			</Flex>

			{/* Featured Projects Section */}
			<Flex fillWidth direction="column" gap="l" paddingBottom="xl" className="scroll-reveal">
				<Heading as="h2" variant="display-strong-s" align="center">
					Featured Projects
				</Heading>
				<RevealFx translateY="16" delay={0.2}>
					<Projects range={[1,1]}/>
				</RevealFx>
				{routes['/blog'] && (
					<Flex fillWidth paddingX="20">
						<Posts range={[1,2]} columns="2"/>
					</Flex>
				)}
				<Projects range={[2]}/>
			</Flex>

			</Flex>
	);
}
