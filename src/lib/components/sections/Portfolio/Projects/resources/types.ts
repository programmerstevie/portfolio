import type { TechName } from '$lib/components/TechLogos';

export type PortfolioProjectData = {
	title: string;
	reel: {
		elements: Reel_Element[];
		description: string;
	};
	preview: {
		img_src: string;
		description: string;
	};
	tech_stack: TechName[];
	status: 'available' | 'coming_soon';
};

export type Reel_Element = Reel_Video | Reel_Image | Reel_GIF;

type Reel_Video = {
	type: 'video';
	src: string;
};

type Reel_Image = {
	type: 'image';
	src: string;
};

type Reel_GIF = {
	type: 'gif';
	src: string;
};

export type ProjectName = 'ARCHIVS' | 'DiligentlyAI' | 'HALite' | 'Tasque';
