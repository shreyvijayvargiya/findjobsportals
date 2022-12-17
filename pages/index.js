import React, { useState } from "react";
import { Button } from "@mantine/core";
import Head from "next/head";
import router from "next/router";
import { AiFillBulb } from "react-icons/ai";
import colors from "tailwindcss/colors";
import { AddPortals } from "../modules";

const HomePage = () => {
	const [opened, setOpened] = useState(false);
	return (
		<div>
			<Head>
				<title>Jobs Portals for your next job</title>
			</Head>
			<div>
				<AddPortals opened={opened} setOpened={setOpened} />
				<div className="border-b border-black">
					<br />
					<div className="text-center mx-auto">
						<Button
							onClick={() => router.push("/portals")}
							color="dark"
							variant="filled"
							size="md"
						>
							Find your next portal
						</Button>
					</div>
					<img
						src="./home_banner.png"
						className="w-3/6 h-full mx-auto object-contain "
					/>
				</div>
				<div className="flex justify-center flex-col items-center md:w-2/6 mx-auto py-20">
					<p
						style={{
							fontStyle: "Comic Sans MS",
							fontWeight: "bold",
							fontSize: "3.8em",
							textAlign: "center",
							marginTop: "10px",
						}}
					>
						Easily add your <br /> favourite portals
					</p>
					<Button
						data-tf-popup="Z7vghLtB"
						color="dark"
						variant="filled"
						onClick={() => setOpened(true)}
						size="lg"
						fullWidth
					>
						Add Portals
					</Button>
					<div className="text-sm my-4 bg-gray-100 rounded-md p-4 text-center flex justify-start items-start">
						<AiFillBulb size={18} color={colors.orange[400]} className="m-1" />
						<span className="text-left">
							{" "}
							Everyone should know where to find next job and we can help them!!
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
