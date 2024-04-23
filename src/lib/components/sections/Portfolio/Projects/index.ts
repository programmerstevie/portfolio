import type { PortfolioProjectData, ProjectName } from './resources/types';
import archivsProjectData from './ARCHIVS';
import haliteProjectData from './HALite';
import diligentlyaiProjectData from './DiligentlyAI';
import tasqueProjectData from './Tasque';

const projectData: Record<ProjectName, PortfolioProjectData> = {
	ARCHIVS: archivsProjectData,
  HALite: haliteProjectData,
  DiligentlyAI: diligentlyaiProjectData,
  Tasque: tasqueProjectData,
};

export default projectData;