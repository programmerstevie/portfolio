import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event,
    {
      preload: (ip) => {
        if (ip.type in ['js', 'css']) return true;
        // if (ip.path.startsWith('/src/'))
        console.log(ip.path);
        return false;
      }
    });
	return response;
};