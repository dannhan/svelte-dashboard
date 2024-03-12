export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo-01.png","logo-02.png","logo-03.png","weather-icons/01d@2x.png","weather-icons/01n@2x.png","weather-icons/02d@2x.png","weather-icons/02n@2x.png","weather-icons/03d@2x.png","weather-icons/03n@2x.png","weather-icons/04d@2x.png","weather-icons/04n@2x.png","weather-icons/09d@2x.png","weather-icons/09n@2x.png","weather-icons/10d@2x.png","weather-icons/10n@2x.png","weather-icons/11d@2x.png","weather-icons/11n@2x.png","weather-icons/13d@2x.png","weather-icons/13n@2x.png","weather-icons/50d@2x.png","weather-icons/50n@2x.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4V2WNOFZ.js","app":"_app/immutable/entry/app.D2bPI_cf.js","imports":["_app/immutable/entry/start.4V2WNOFZ.js","_app/immutable/chunks/entry.GOwwhzx_.js","_app/immutable/chunks/scheduler.Cglc-E-6.js","_app/immutable/chunks/index.C4PciY-_.js","_app/immutable/entry/app.D2bPI_cf.js","_app/immutable/chunks/scheduler.Cglc-E-6.js","_app/immutable/chunks/index.9iPnfnGV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js'))
		],
		routes: [
			{
				id: "/(login)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/experiments",
				pattern: /^\/([^/]+?)\/experiments\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/gambar-desain",
				pattern: /^\/([^/]+?)\/gambar-desain\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/identitas-proyek",
				pattern: /^\/([^/]+?)\/identitas-proyek\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/jadwal-project",
				pattern: /^\/([^/]+?)\/jadwal-project\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/lokasi",
				pattern: /^\/([^/]+?)\/lokasi\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/progress",
				pattern: /^\/([^/]+?)\/progress\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/realisasi-biaya",
				pattern: /^\/([^/]+?)\/realisasi-biaya\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dashboard)/[project]/tim-pelaksana",
				pattern: /^\/([^/]+?)\/tim-pelaksana\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
