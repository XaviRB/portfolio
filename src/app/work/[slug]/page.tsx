import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL, person } from '@/app/resources';

interface WorkParams {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
	let posts = getPosts(['src', 'app', 'work', 'projects']);

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({ params }: WorkParams) {
	const { slug } = await params;
	const post = getPosts(['src', 'app', 'work', 'projects']).find((entry) => entry.slug === slug);

	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		images = [],
		image,
		team,
	} = post.metadata;

	const toAbsoluteUrl = (path?: string) => {
		if (!path) return undefined;
		return path.startsWith('http') ? path : `https://${baseURL}${path}`;
	};

	const resolvedImages = images.map((entry) => toAbsoluteUrl(entry)).filter(Boolean) as string[];
	const primaryImage = toAbsoluteUrl(image) ?? resolvedImages[0] ?? `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		images: resolvedImages,
		team,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/work/${post.slug}`,
			images: [
				{
					url: primaryImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [primaryImage],
		},
	};
}

export default async function Project({ params }: WorkParams) {
	const { slug } = await params;
	let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	const toAbsoluteUrl = (path?: string) => {
		if (!path) return undefined;
		return path.startsWith('http') ? path : `https://${baseURL}${path}`;
	};

	const projectImage = toAbsoluteUrl(post.metadata.image) ?? toAbsoluteUrl(post.metadata.images?.[0]) ?? `https://${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`;
	const avatars = post.metadata.team?.map((member) => ({
		src: member.avatar,
	})) || [];

	return (
		<Flex as="section"
			fillWidth maxWidth="m"
			direction="column" alignItems="center"
			gap="l">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
					image: projectImage,
							url: `https://${baseURL}/work/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			<Flex
				fillWidth maxWidth="xs" gap="16"
				direction="column">
				<Button
					href="/work"
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					Projects
				</Button>
				<Heading
					variant="display-strong-s">
					{post.metadata.title}
				</Heading>
				{post.metadata.link && (
					<Button
						href={post.metadata.link}
						variant="secondary"
						size="s"
						suffixIcon="arrowUpRight">
						Visit Site
					</Button>
				)}
			</Flex>
			{post.metadata.images.length > 0 && (
				<SmartImage
					aspectRatio="16 / 9"
					radius="m"
					alt="image"
					src={post.metadata.images[0]}/>
			)}
			<Flex style={{margin: 'auto'}}
				as="article"
				maxWidth="xs" fillWidth
				direction="column">
				<Flex
					gap="12" marginBottom="24"
					alignItems="center">
					{ post.metadata.team && (
						<AvatarGroup
							reverseOrder
							avatars={avatars}
							size="m"/>
					)}
					<Text
						variant="body-default-s"
						onBackground="neutral-weak">
						{formatDate(post.metadata.publishedAt)}
					</Text>
				</Flex>
				<CustomMDX source={post.content} />
			</Flex>
		</Flex>
	)
}
