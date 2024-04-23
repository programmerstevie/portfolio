import type { ProjectName } from './types';

export const projectDescriptions: Record<
	ProjectName,
	{
		preview: string;
		reel: string;
	}
> = {
	ARCHIVS: {
		preview:
			'ARCHIVS is a "Link In Bio" tool for online creators (esp. influencers) to have one spot to place all of their links.',
		reel: 'ARCHIVS is a "Link In Bio" tool for online creators (social media influencers especially) to have one spot to place all of their links.\n They have analytics at their fingertips for their sponsors and their own marketing goals.'
	},
	DiligentlyAI: {
		preview:
			'DiligentlyAI is a B2B service that helps businesses that use ai language learning models to assure quality.',
		reel: 'DiligentlyAI is a B2B service that helps businesses that use ai language learning models to assure quality.'
	},
	HALite: {
		preview:
			'HALite is a data analysis tool for environmental chemistry with a completely customizable workflow.',
		reel: 'HALite is a data analysis tool for environmental chemistry with a completely customizable workflow.\n Widgets can be strung together to show different aspects of your data that you need to see.'
	},
	Tasque: {
		preview:
			'Tasque is an desktop app for being mindful of your life. We all have tasks, goals, and ideas. Let\'s keep track!',
		reel: 'Tasque is an desktop app for being mindful of your life. We all have tasks, goals, and ideas. Let\'s keep track!'
	}
};
