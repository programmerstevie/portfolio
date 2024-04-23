import previewImage from '$lib/assets/projects/HALite/main.png';

import reel_image_data_plot from '$lib/assets/projects/HALite/reel/image_data_plot.png';
import reel_image_file_selector from '$lib/assets/projects/HALite/reel/image_file_selector.png';
import reel_image_animated_data_plot_interaction from '$lib/assets/projects/HALite/reel/image_animated_data_plot_interaction.gif';
import reel_image_animated_import_files from '$lib/assets/projects/HALite/reel/image_animated_import_files.gif';

import type { PortfolioProjectData } from './resources/types';
import { projectDescriptions } from './resources/descriptions';
import { TechName } from '$lib/components/TechLogos';

const projectData: PortfolioProjectData = {
	title: 'HALite',
	tech_stack: [TechName.REACT, TechName.TAILWIND, TechName.SASS],
	status: 'available',
	preview: {
		description: projectDescriptions.HALite.preview,
		img_src: previewImage
	},
	reel: {
		description: projectDescriptions.HALite.reel,
		elements: [
			{
				type: 'image',
				src: reel_image_data_plot
			},
			{
				type: 'image',
				src: reel_image_file_selector
			},
			{
				type: 'gif',
				src: reel_image_animated_data_plot_interaction
			},
			{
				type: 'gif',
				src: reel_image_animated_import_files
			}
		]
	}
};

export default projectData;
