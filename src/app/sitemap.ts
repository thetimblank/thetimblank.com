import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: 'https://thetimblank.com',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
	];

	return sitemap;
}
