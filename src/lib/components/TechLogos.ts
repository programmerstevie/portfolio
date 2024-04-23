import tech_logo_color_js from '$lib/assets/icons/tech/color/svg/JS.svg';
import tech_logo_color_ts from '$lib/assets/icons/tech/color/svg/TS.svg';
import tech_logo_color_html5 from '$lib/assets/icons/tech/color/svg/HTML5.svg';
import tech_logo_color_css3 from '$lib/assets/icons/tech/color/svg/CSS3.svg';
import tech_logo_color_react from '$lib/assets/icons/tech/color/svg/REACT.svg';
import tech_logo_color_nextjs from '$lib/assets/icons/tech/color/svg/NEXTJS.svg';
import tech_logo_color_svelte from '$lib/assets/icons/tech/color/svg/SVELTE.svg';
import tech_logo_color_angular from '$lib/assets/icons/tech/color/svg/ANGULAR.svg';
import tech_logo_color_sass from '$lib/assets/icons/tech/color/svg/SASS.svg';
import tech_logo_color_tailwind from '$lib/assets/icons/tech/color/svg/TAILWIND.svg';
import tech_logo_color_electron from '$lib/assets/icons/tech/color/svg/ELECTRON.svg';

import tech_logo_mono_git from '$lib/assets/icons/tech/mono/svg/GIT_ICON.svg';
import tech_logo_mono_js from '$lib/assets/icons/tech/mono/svg/JAVASCRIPT_ICON.svg';
import tech_logo_mono_html5 from '$lib/assets/icons/tech/mono/svg/HTML5_ICON.svg';
import tech_logo_mono_css3 from '$lib/assets/icons/tech/mono/svg/CSS3_ICON.svg';
import tech_logo_mono_nodejs from '$lib/assets/icons/tech/mono/svg/NODEJS_ICON.svg';
import tech_logo_mono_ts from '$lib/assets/icons/tech/mono/svg/TYPESCRIPT_ICON.svg';
import tech_logo_mono_svelte from '$lib/assets/icons/tech/mono/svg/SVELTE_ICON.svg';
import tech_logo_mono_react from '$lib/assets/icons/tech/mono/svg/REACT_ICON.svg';
import tech_logo_mono_nextjs from '$lib/assets/icons/tech/mono/svg/NEXTJS_ICON.svg';
import tech_logo_mono_angular from '$lib/assets/icons/tech/mono/svg/ANGULAR_ICON.svg';
import tech_logo_mono_tailwind from '$lib/assets/icons/tech/mono/svg/TAILWIND_ICON.svg';
import tech_logo_mono_sass from '$lib/assets/icons/tech/mono/svg/SASS_ICON.svg';
import tech_logo_mono_python from '$lib/assets/icons/tech/mono/svg/PYTHON_ICON.svg';
import tech_logo_mono_aws from '$lib/assets/icons/tech/mono/svg/AWS_ICON.svg';
import tech_logo_mono_electron from '$lib/assets/icons/tech/mono/svg/ELECTRON_ICON.svg';

export enum TechName {
	GIT = 'git',
	HTML = 'html5',
	CSS = 'css3',
	JS = 'js',
	TS = 'ts',
	NODEJS = 'nodejs',
	REACT = 'react',
	SVELTE = 'svelte',
	NEXTJS = 'nextjs',
	ANGULAR = 'angular',
	TAILWIND = 'tailwind',
	SASS = 'sass',
	PYTHON = 'python',
	AWS = 'aws',
	ELECTRON = 'electron'
}

export const color_logo: Partial<Record<TechName, string>> = {
	js: tech_logo_color_js,
	ts: tech_logo_color_ts,
	html5: tech_logo_color_html5,
	css3: tech_logo_color_css3,
	react: tech_logo_color_react,
	nextjs: tech_logo_color_nextjs,
	svelte: tech_logo_color_svelte,
	angular: tech_logo_color_angular,
	sass: tech_logo_color_sass,
	tailwind: tech_logo_color_tailwind,
  electron: tech_logo_color_electron
};

export const mono_logo: Record<TechName, string> = {
	git: tech_logo_mono_git,
	js: tech_logo_mono_js,
	html5: tech_logo_mono_html5,
	css3: tech_logo_mono_css3,
	nodejs: tech_logo_mono_nodejs,
	ts: tech_logo_mono_ts,
	svelte: tech_logo_mono_svelte,
	react: tech_logo_mono_react,
	nextjs: tech_logo_mono_nextjs,
	angular: tech_logo_mono_angular,
	tailwind: tech_logo_mono_tailwind,
	sass: tech_logo_mono_sass,
	python: tech_logo_mono_python,
	aws: tech_logo_mono_aws,
	electron: tech_logo_mono_electron
};
