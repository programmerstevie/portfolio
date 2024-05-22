import social_icon_github from '$lib/assets/icons/social/svg/Github.svg';
import social_icon_instagram from '$lib/assets/icons/social/svg/Instagram.svg';
import social_icon_linkedin from '$lib/assets/icons/social/svg/LinkedIn.svg';

export enum SocialType {
	GITHUB = 'github',
	INSTAGRAM = 'instagram',
	LINKEDIN = 'linkedin'
}

type SocialData = {
  name: string;
	icon_src: string;
	link: URL;
};

const socials_data: Record<SocialType, SocialData> = {
	github: {
    name: 'Github',
		icon_src: social_icon_github,
		link: new URL('https://github.com/programmerstevie')
	},
	instagram: {
    name: 'Instagram',
		icon_src: social_icon_instagram,
		link: new URL('https://www.instagram.com/programmerstevie')
	},
	linkedin: {
    name: 'LinkedIn',
		icon_src: social_icon_linkedin,
		link: new URL('https://www.linkedin.com/in/programmerstevie')
	}
};

export default socials_data;
