import React from "react";
import { MantineProvider } from "@mantine/core";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {


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
