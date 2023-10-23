const SEO = {
	title: 'Open Graph Article Title',
	noindex: false,
	nofollow: false,
	description: 'Description of open graph article',
	base: 'https://vortexwe.com',
	keywords: ['svelte', 'sveltekit', 'web'],
	applicationName: 'Vortex West',
	canonical: 'https://www.vortexwe.com',
	themeColor: 'red',
	manifest: '%sveltekit.assets%/favicons/site.manifest',

	/**@type {import("../lib/types").SvelteSeo['twitter']}*/
	twitter: {
		title: 'Open Graph Article Title',
		description: 'Description of open graph article',
		image: 'https://image.com',
		imageAlt: 'image Alt',
		card: 'app',
		site: '@svelteseo',
		creator: '@artiebits',
		player: 'https://wakey.io/embed/26',
		playerWidth: '720',
		playerHeight: '720',
		playerStream: 'https://wakey.io/public/vid/26.mp4',
		appNameIphone: 'Svelte SEO',
		appIdIphone: '23232',
		appUrlIphone: 'applenews://',
		appNameIpad: 'Svelte SEO',
		appIdGoogleplay: 'svelte.seo.com',
		appNameGoogleplay: 'Svelte SEO',
		appUrlGoogleplay: 'https://play.google.com/store/apps/details?id=com.sega.sonicdash'
	},

	facebook: {
		appId: '12344567'
	},

	/**@type {import("../lib/types").OpenGraph} */
	openGraph: {
		title: 'Open Graph Article Title',
		type: 'website',
		url: 'https://www.example.com',
		description: 'Description of open graph article',
		site_name: 'Vortex West',
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
		]
	}
};

export default SEO;
