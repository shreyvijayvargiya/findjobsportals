import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="twitter:title"
						content="Search Jobs portals around the world"
					/>
					<meta
						name="twitter:description"
						content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FJobs%20Log%20Book%2FLog%20Book%20Thumbnail.png?alt=media&token=f4e27a1a-a681-47c8-bcac-a437f981865d"
					/>
					<meta
						name="twitter:image"
						property="twitter:image"
						content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FJobs%20Log%20Book%2FLog%20Book%20Thumbnail.png?alt=media&token=f4e27a1a-a681-47c8-bcac-a437f981865d"
					/>
					<meta
						name="keywords"
						content="React, Node JS, Frontend, Backend, Blockhain, Software Developer Jobs, Jobs Portals, Find next jobs"
					/>
					<meta name="author" content="shrey vijayvargiya" />

					<meta
						name="og:title"
						content="Search Jobs portals around the world"
					/>
					<meta
						name="og:description"
						content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FJobs%20Log%20Book%2FLog%20Book%20Thumbnail.png?alt=media&token=f4e27a1a-a681-47c8-bcac-a437f981865d"
					/>
					<meta
						name="og:image"
						property="og:image"
						content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FJobs%20Log%20Book%2FLog%20Book%20Thumbnail.png?alt=media&token=f4e27a1a-a681-47c8-bcac-a437f981865d"
					/>
					<meta
						name="keywords"
						content="React, Node JS, Frontend, Backend, Blockhain, Software Developer Jobs, Jobs Portals, Find next jobs"
					/>
					<meta name="author" content="shrey vijayvargiya" />
					<title>Jobs Portals for your next job</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
