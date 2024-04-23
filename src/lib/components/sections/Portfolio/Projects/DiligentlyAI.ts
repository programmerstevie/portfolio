import preview_image from '$lib/assets/projects/DiligentlyAI/main.png';

import reel_image_landing_design from '$lib/assets/projects/DiligentlyAI/reel/image_landing_design.png';
import reel_image_prompt_evaluations_charts from '$lib/assets/projects/DiligentlyAI/reel/image_prompt_evaluations_charts.png';
import reel_image_prompt_evaluations_table from '$lib/assets/projects/DiligentlyAI/reel/image_prompt_evaluations_table.png';
import reel_image_score_data_over_time from '$lib/assets/projects/DiligentlyAI/reel/image_score_data_over_time.png';

import type { PortfolioProjectData } from './resources/types';
import { projectDescriptions } from './resources/descriptions';
import { TechName } from '$lib/components/TechLogos';

const projectData: PortfolioProjectData = {
	title: 'DiligentlyAI',
	tech_stack: [TechName.SVELTE, TechName.TAILWIND],
	status: 'available',
	preview: {
		description: projectDescriptions.DiligentlyAI.preview,
		img_src: preview_image
	},
	reel: {
		description: projectDescriptions.DiligentlyAI.reel,
		elements: [
			{
				type: 'image',
				src: reel_image_landing_design
			},
			{
				type: 'image',
				src: reel_image_prompt_evaluations_charts
			},
			{
				type: 'image',
				src: reel_image_prompt_evaluations_table
			},
			{
				type: 'image',
				src: reel_image_score_data_over_time
			}
		]
	}
};

export default projectData;
