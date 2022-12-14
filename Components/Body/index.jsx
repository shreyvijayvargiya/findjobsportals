import React, { useState, useEffect } from "react";
import { Table, Badge, Button, Tooltip } from "@mantine/core";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillMediumCircle,
	AiFillYoutube,
} from "react-icons/ai";
import colors from "tailwindcss/colors";
import { FaDev } from "react-icons/fa";
import router from "next/router";

const Body = ({ children }) => {
	return (
		<div>
			<div className="fixed left-0 right-0 top-0 p-4 border-b border-black bg-gray-100">
				<div className="flex justify-between items-center">
					<div className="flex justify-start items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
						<img
							src="/Log Book Thumbnail.png"
							className="w-10 h-10 mx-auto rounded-md"
						/>
						<p className="text-md font-bold">Find Jobs Portals</p>
					</div>
					<button
						data-tf-popup="Z7vghLtB"
						data-tf-iframe-props="title=FindJobsPortals-Adding-Portals-Form"
						data-tf-medium="snippet"
						className="border bg-black hover:bg-gray-900 rounded-md px-6 py-3 text-gray-100"
					>
						Add Portals
					</button>
					<script src="//embed.typeform.com/next/embed.js"></script>
				</div>
			</div>
			<div className="min-w-full my-20">{children}</div>
			<div className="p-10 border-t border-black">
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
				<p className="text-center my-4">
					Designed & Developed by{" "}
					<a
						className="font-bold text-black hover:text-gray-900 hover:underline"
						href="https://shreyvijayvargiya.vercel.app"
						target="_blank"
					>
						Shrey
					</a>
				</p>
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

export default Body;
