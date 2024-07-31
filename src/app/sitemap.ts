import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: 'https://thetimblank.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];

	return sitemap;
}
