import React from "react";
import Head from "next/head";
import router from "next/router";

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Jobs Portals for your next job</title>
			</Head>
			<div>
				<div className="border-b border-black">
					<br />
					<div className="text-center mx-auto">
						<button
							onClick={() => router.push("/portals")}
							className="border bg-black hover:bg-gray-900 rounded-md p-6 text-gray-100 my-2 w-80 mx-auto text-center"
						>
							Find your next portal
						</button>
					</div>
					<img
						src="./home_banner.png"
						className="w-full h-full mx-auto object-contain "
					/>
				</div>
				<div className="flex justify-center flex-col items-center">
					<p
						style={{
							text: "center",
							fontStyle: "Comic Sans MS",
							fontWeight: "bold",
							fontSize: "4em",
						}}
					>
						Easily add your <br /> favourite portals
					</p>
					<button
						data-tf-popup="Z7vghLtB"
						data-tf-iframe-props="title=FindJobsPortals-Adding-Portals-Form"
						data-tf-medium="snippet"
						className="border bg-black hover:bg-gray-900 rounded-md p-6 text-gray-100 my-2 w-80"
					>
						Add Portals
					</button>
					<span className="text-xs my-1 text-center">
						Everyone should know where to find next job <br />
						and we can help them!!
					</span>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
