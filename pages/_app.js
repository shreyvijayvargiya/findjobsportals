import React from "react";
import { MantineProvider } from "@mantine/core";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {


	return (
		<div>
		  <script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

		    <script strategy="lazyOnload">
			{`
			    window.dataLayer = window.dataLayer || [];
			    function gtag(){dataLayer.push(arguments);}
			    gtag('js', new Date());
			    gtag('config', 'G-VGZ783234E', {
			    page_path: window.location.pathname,
			    });
			`}
		    </script>
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
