import preview_image from '$lib/assets/projects/ARCHIVS/main.png';

import reel_image_add_link from '$lib/assets/projects/ARCHIVS/reel/image_add_link.png';
import reel_image_profile from '$lib/assets/projects/ARCHIVS/reel/image_profile.png';

import reel_image_animated_edit_link_color from '$lib/assets/projects/ARCHIVS/reel/image_animated_edit_link_color.gif';
import reel_image_animated_reorder_links from '$lib/assets/projects/ARCHIVS/reel/image_animated_reorder_links.gif';

import type { PortfolioProjectData } from './resources/types';
import { projectDescriptions } from './resources/descriptions';
import { TechName } from '$lib/components/TechLogos';

const projectData: PortfolioProjectData = {
	title: 'ARCHIVS',
	tech_stack: [TechName.NEXTJS, TechName.TAILWIND],
	status: 'available',
	preview: {
		description: projectDescriptions.ARCHIVS.preview,
		img_src: preview_image
	},
	reel: {
		description: projectDescriptions.ARCHIVS.reel,
		elements: [
			{
				type: 'image',
				src: reel_image_add_link
			},
			{
				type: 'image',
				src: reel_image_profile
			},
			{
				type: 'gif',
				src: reel_image_animated_edit_link_color
			},
			{
				type: 'gif',
				src: reel_image_animated_reorder_links
			}
		]
	}
};

export default projectData;
