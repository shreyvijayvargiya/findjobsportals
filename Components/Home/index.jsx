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
		<tr className="bg-gray-50">
			<th>Name</th>
			<th>Category</th>
			<th>Website</th>
		</tr>
	);

	return (
		<div>
			<div className="md:w-3/5 xl:w-3/5 2xl:w-2/5 mx-auto xxs:w-full xs:w-full sm:w-full m-10">
				<div className="flex justify-start gap-2 items-start">
					<div>
						<img
							src="/Log Book Thumbnail.png"
							className="w-24 h-24 mx-auto rounded-md"
						/>
					</div>
					<div>
						<p className="text-4xl font-bold">Jobs Portals around the world</p>
						<p>
							Simplify your job search with extensive list of jobs portals
							around the world
						</p>
					</div>
				</div>
				<div className="my-6">
					<Table withBorder withColumnBorders>
						<thead>{ths}</thead>
						<tbody>
							{data &&
								data.map((item) => (
									<tr key={item.name} className="hover:bg-gray-100 ">
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
								))}
						</tbody>
					</Table>
				</div>
			</div>
			<div className="p-10 border-t border-gray-100 bg-gray-50">
				<div className="mx-auto w-80 border border-gray-200 hover:bg-gray-100 p-2 rounded-md">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FFrontend%20Development%20Roadmap%2FFrontend%20Master%20Guide%20-%20Thumbnail.png?alt=media&token=4201633b-7978-4fa7-86d2-06074d10ed73"
						alt="Frontend Development Roadmap Banner"
						className="w-full h-full rounded-md"
					/>
					<p className="text-xl front-bold">
						Ultimate Frontend Development Roadmap
					</p>
					<p className="text font-semibold my-2">
						Master frontend development by learning top-tech stack with
						top-notch resources all in one place.
					</p>
					<a
						href="https://shreyvijayvargiya.gumroad.com/l/frontend-development-roadmap?layout=profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="filled" fullWidth size="sm" color="grape">
							Get the template
						</Button>
					</a>
				</div>
				<br />

				<p className="text-center my-8">
					Designed & Developed by{" "}
					<a
						className="font-bold text-indigo-700 hover:text-indigo-600 hover:underline"
						href="https://shreyvijayvargiya.vercel.app"
						target="_blank"
					>
						Shrey
					</a>
				</p>
				<hr />
				<p className="text-sm text-gray-400 my-1 p-2 font-bold text-center">Social links</p>
				<div className="flex justify-center items-center m-1 gap-4">
					<Tooltip label="Twitter">
							<a
								href="https://twitter.com/treyvijay"
								target="_blank"
								data-tip="Twitter"
								alt="Twitter"
								aria-label="Twitter"
								rel="noreferrer"
							>
								<AiFillTwitterCircle
									size={24}
									color={colors.blue[500]}
									data-tip="Twitter"
								/>
							</a>
					</Tooltip>
					<Tooltip label="Github">
							<a
								href="https://github.com/shreyvijayvargiya"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillGithub size={24} color={colors.indigo[500]} />
							</a>
					</Tooltip>
					<Tooltip label="Medium">
							<a
								href="https://medium.com/@shreyvijayvargiya26"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillMediumCircle size={24} color={colors.orange[500]} />
							</a>
					</Tooltip>
					<Tooltip label="Devto">
							<a
								href="https://dev.to/shreyvijayvargiya"
								target="_blank"
								rel="noreferrer"
							>
								<FaDev size={24} color={colors.pink[500]} />
							</a>
					</Tooltip>
					<Tooltip label="Youtube">
							<a
								href="https://www.youtube.com/channel/UC6I-Tz6QwYbJpoIK7l0NtXA"
								target="_blank"
								rel="noreferrer"
							>
								<AiFillYoutube size={24} color={colors.red[500]} />
							</a>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default Home;
