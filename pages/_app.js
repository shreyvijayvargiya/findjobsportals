import React from "react";
import app from "../utils/firebase";
import { MantineProvider } from "@mantine/core";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
	React.useEffect(() => {
		app.analytics();
	}, []);

	return (
		<div>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</div>
	);
};
export default MyApp;
