const SEO = {
	title: 'Vortex West',
	noindex: true,
	nofollow: false,
	description: 'Description of open graph article',
	base: 'https://vortexwest.com',
	keywords: ['software development', 'software engineering', 'web'],
	applicationName: 'Vortex West',
	canonical: 'https://www.vortexwe.com',
	themeColor: 'blue',
	nositelinkssearchbox: false,
	notranslate: false,
	amp: 'https://www.example.com/url/to/amp/document.html',
	manifest: '/manifest.json',

	/**@type {import("../lib/types").SvelteSeo['twitter']}*/
	twitter: {
		title: 'Open Graph Article Title',
		description: 'Description of open graph article',
		image: 'https://image.com',
		imageAlt: 'image Alt',
		card: 'app',
		site: '@svelteseo'
	},

	/**@type {import("../lib/types").OpenGraph} */
	openGraph: {
		title: 'Open Graph Article Title',
		type: 'website',
		url: 'https://www.example.com',
		description: 'Description of open graph article',
		site_name: 'Svelte SEO',
		images: [
			{
				url: 'http://www.example.image',
				secure_url: 'https://www.example.image',
				type: 'image/jpeg',
				alt: 'image alt',
				width: 400,
				height: 400
			},
			{
				url: 'http://www.example1.image',
				secure_url: 'https://www.example1.image',
				type: 'image/jpeg',
				alt: 'image alt',
				width: 500,
				height: 500
			}
		],

		article: {
			published_time: '2020-08-03T17:31:37Z',
			modified_time: '2020-08-20T09:31:37Z',
			expiration_time: '2025-12-21T17:31:37Z',
			section: 'Section II',
			author: [
				'https://www.example.com/authors/@firstnameA-lastnameA',
				'https://www.example.com/authors/@firstnameB-lastnameB'
			],
			tag: ['Tag A', 'Tag B', 'Tag C']
		},

		profile: {
			first_name: 'John',
			last_name: 'Doe',
			username: 'johndoe',
			gender: 'male'
		}
	}
};

export default SEO;
