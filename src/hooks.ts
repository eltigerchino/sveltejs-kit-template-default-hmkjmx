import { env } from '$env/dynamic/private';

export async function handleError() {
	console.log(env.ABC);
}
