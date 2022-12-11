import React, { useState, useEffect } from "react";
import { portalsFromSupabase } from "../../utils/api/supabaseApi";
import { Table, Badge } from "@mantine/core";
import { findSearchModule } from "../../utils/api/searchApi";

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
		<tr>
			<th>Name</th>
			<th>Category</th>
			<th>Website</th>
		</tr>
	);

	const Rows = () => data &&
			data.map((item) => {
				return (
					<tr key={item.id} className="hover:bg-gray-100 ">
						<td className="font-semibold">{item.name}</td>
						<td>
							{item.domain.map((element) => (
								<Badge>{element}</Badge>
							))}
						</td>
						<td>
							<a
								href={item.website}
								target="_blank"
								className="text-indigo-700 hover:text-indigo-600 hover:underline"
							>
								{item.website}
							</a>
						</td>
					</tr>
				);
			})

	return (
		<div>
			<div className="md:w-3/5 xl:w-3/5 2xl:w-2/5 mx-auto xxs:w-full xs:w-full sm:w-full m-10">
				<p className="text-4xl font-bold">Jobs Portals around the world</p>
				<p>
					Simplify your job search with extensive list of jobs portals around
					the world
				</p>
				<div className="border border-gray-100 rounded-md my-6">
					<Table>
						<thead>{ths}</thead>
						<tbody>
							<Rows />
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};
export default Home;
