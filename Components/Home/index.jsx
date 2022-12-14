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
import { FaDev } from "react-icons/fa";

const Home = () => {
	const [data, setData] = useState(null);
	const [loader, setLoader] = useState(false);

	const getPortals = async () => {
		const users = await portalsFromSupabase();
		setData(users);
		setLoader(false);
	};

	useEffect(() => {
		setLoader(true);
		getPortals();
	}, []);

	const ths = (
		<tr className="bg-gray-50 text-left">
			<th>Name</th>
			<th>Category</th>
			<th>Website</th>
		</tr>
	);

	const getBadgeColor = (type) => {
		let color;
		if(type === "All"){
			color = "teal"
		}else if(type === "Development"){
			color = "orange"
		}else if(type === "Designing"){
			color = "voilet"
		}else if(type === "Blockchain"){
			color= "pink"
		}
		return color;
	}

	return (
		<div>
			<div className="md:w-3/5 xl:w-3/5 2xl:w-2/5 mx-auto xxs:w-full xs:w-full sm:w-full my-20">
				<p className="text-4xl font-bold">Jobs Portals around the world</p>
				<p>
					Simplify your job search with extensive list of jobs portals around
					the world
				</p>
				<div className="my-6">
					<Table withBorder withColumnBorders>
						<thead>{ths}</thead>
						<tbody>
							{data &&
								data.map((item) => (
									<tr key={item.name} className="hover:bg-gray-100 ">
										<td className="text-2xl font-regular">{item.name}</td>
										<td>
											{item.domain.map((element) => (
												<Badge color={getBadgeColor(element)}>{element}</Badge>
											))}
										</td>
										<td>
											<a
												href={item.website}
												target="_blank"
												className="text-pink-800 hover:text-pink-700 hover:underline"
											>
												{item.website}
											</a>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default Home;
