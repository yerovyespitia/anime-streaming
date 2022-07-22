export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/watch/[id].svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"watch/[id]": [[0, 3], [1]]
};