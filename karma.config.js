module.exports = function (config) {
	config.set({
		files: [{ pattern: "src/assets/static/inputs/*.txt", watched: false, included: false, served: true }],
		basePath: "",
		frameworks: ["jasmine", "@angular-devkit/build-angular"],
		plugins: [
			require("karma-jasmine"),
			require("karma-chrome-launcher"),
			require("karma-jasmine-html-reporter"),
			require("karma-coverage"),
			require("@angular-devkit/build-angular/plugins/karma"),
		],
		proxies: {
			"/assets/": "/base/src/assets/",
		},
		client: {
			jasmine: {},
			clearContext: false,
		},
		jasmineHtmlReporter: {
			suppressAll: true,
		},
		coverageReporter: {
			dir: require("path").join(__dirname, "./coverage"),
			subdir: ".",
			reporters: [{ type: "text-summary" }, { type: "lcovonly" }, { type: "json" }],
		},
		reporters: ["progress", "kjhtml"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false,
		restartOnFileChange: true,
	});
};
