import React, { useState, useEffect } from "react";
import { Table, Badge, Button, Tooltip } from "@mantine/core";
import { portalsFromSupabase } from "../../utils/api/supabaseApi";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillMediumCircle,
	AiFillYoutube,
} from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import colors from "tailwindcss/colors";
import axios from "axios";
import PortalModal from "./PortalModal";

const Home = () => {
	const [data, setData] = useState(null);
	const [loader, setLoader] = useState(false);
	const [opened, setOpened] = useState(false);
	const [active, setActive] = useState(null)

	const getPortals = async () => {
		const portals = await portalsFromSupabase();
		setData(portals);
		setLoader(false);
	};

	useEffect(() => {
		setLoader(true);
		getPortals();
	}, []);

	const handleFetchMetadata = async (item) => {
		const data = await axios.post(
			"http://localhost:3000/api/getWebsiteMetadata",
			{ item }
		);
		console.log(data, "data");
	};

	const ths = (
		<tr className="bg-black text-left">
			<th className="text-white p-4">Logo</th>
			<th className="text-white p-4">Name</th>
			<th className="text-white p-4">Website</th>
			<th className="text-white p-4">Description</th>
			<th className="text-white p-4">Category</th>
		</tr>
	);

	const getBadgeColor = (type) => {
		let color;
		if (type === "All") {
			color = colors.green[400];
		} else if (type === "Development") {
			color = colors.orange[400];
		} else if (type === "Designing") {
			color = colors.indigo[400];
		} else if (type === "Blockchain") {
			color = colors.pink[400];
		}
		return color;
	};

	

	return (
		<div>
			<div className="md:w-4/5 mx-auto xxs:w-full xxs:w-full xs:w-full sm:w-full my-20">
				<p className="text-4xl font-bold">Jobs Portals around the world</p>
				<p>
					Simplify your job search with extensive list of jobs portals around
					the world
				</p>
				<div className="my-6">
					<table className="border-2 border-black rounded-md w-full">
						<thead>{ths}</thead>
						<tbody>
							{data &&
								data.map((item) => (
									<tr
										key={item.name}
										className="hover:bg-gray-200 rounded-md border-2 border-black"
									>
										<td className="p-3 border-r-2 border-black">
											{item.icon && (
												<img src={item.icon} className="w-10 h-10 rounded-md" />
											)}
										</td>
										<td className="p-3 border-r-2 border-black cursor-pointer" onClick={() => {
											setActive(item);
											setOpened(true);
										}}>{item.name}</td>

										<td className="p-3 border-r-2 border-black">
											<a
												href={item.website}
												target="_blank"
												className="text-black underline hover:font-semibold"
											>
												{item.website}
											</a>
										</td>
										<td
											className="p-3 border-r-2 border-black word-wrap text-ellipsis"
											style={{
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "ellipsis",
												maxWidth: "300px",
											}}
										>
											{item.description}
										</td>
										<td className="p-3 border-r-2 border-black">
											{item.domain.map((element) => (
												<span
													className="rounded-md py-2 px-4 m-2 text-xs font-semibold"
													style={{ backgroundColor: getBadgeColor(element) }}
												>
													{element}
												</span>
											))}
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			<PortalModal opened={opened} setOpened={setOpened} portal={active} />
		</div>
	);
};

export default Home;
