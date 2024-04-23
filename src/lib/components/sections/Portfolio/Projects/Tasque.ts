import previewImage from '$lib/assets/projects/Tasque/main.png';

import reel_image_tasque_main from '$lib/assets/projects/Tasque/reel/image_tasque_main.png';
import reel_image_tasque_list from '$lib/assets/projects/Tasque/reel/image_tasque_list.png';
import reel_image_sticky_board from '$lib/assets/projects/Tasque/reel/image_sticky_board.png';
import reel_image_journal_entry from '$lib/assets/projects/Tasque/reel/image_journal_entry.png';

import type { PortfolioProjectData } from './resources/types';
import { projectDescriptions } from './resources/descriptions';
import { TechName } from '$lib/components/TechLogos';

const projectData: PortfolioProjectData = {
	title: 'Tasque',
	tech_stack: [TechName.ELECTRON, TechName.SVELTE, TechName.TAILWIND],
	status: 'coming_soon',
	preview: {
		description: projectDescriptions.Tasque.preview,
		img_src: previewImage
	},
	reel: {
		description: projectDescriptions.Tasque.reel,
		elements: [
			{
				type: 'image',
				src: reel_image_tasque_main
			},
			{
				type: 'image',
				src: reel_image_tasque_list
			},
			{
				type: 'image',
				src: reel_image_sticky_board
			},
			{
				type: 'image',
				src: reel_image_journal_entry
			}
		]
	}
};

export default projectData;
