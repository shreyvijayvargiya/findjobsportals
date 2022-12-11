const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = () => {
	return {
		env: {
			SUPABASE_KEY:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidmlld21zcWd0ZXB3a2JwYWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NzA2MjAsImV4cCI6MTk4NDM0NjYyMH0.tAYXlJQ7d-xxmrSy2WF3tSSIFgraUL9LkMI1YzodtSU",
		},
		webpack: (config) => {
			config.node = {
				fs: "empty",
				child_process: "empty",
				net: "empty",
				dns: "empty",
				tls: "empty",
			};
			return config;
		},
		...withBundleAnalyzer({}),
	};
};
