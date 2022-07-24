export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/left.svg","assets/logo.png","assets/right.svg","assets/thumbnails/aot.png","assets/thumbnails/bc.png","assets/thumbnails/csm.png","assets/thumbnails/deathnote.png","assets/thumbnails/ds.png","assets/thumbnails/kakegurui.png","assets/thumbnails/lain.png","assets/thumbnails/ve.png","assets/video.mp4","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".mp4":"video/mp4"},
	_: {
		entry: {"file":"_app/immutable/start-11f3668d.js","imports":["_app/immutable/start-11f3668d.js","_app/immutable/chunks/index-35cf029e.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "watch/[id]",
				pattern: /^\/watch\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
