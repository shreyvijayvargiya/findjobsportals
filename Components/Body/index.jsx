import React, { useState, useEffect } from "react";
import { TextInput, Badge, Button, Tooltip } from "@mantine/core";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillMediumCircle,
	AiFillYoutube,
} from "react-icons/ai";
import colors from "tailwindcss/colors";
import { FaDev } from "react-icons/fa";
import router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { AddPortals } from "../../modules";
import "react-toastify/dist/ReactToastify.css";

const Body = ({ children }) => {
	const [opened, setOpened] = useState(false);
	const [email, setEmail] = useState("");

	const [error, setError] = useState("");

	const handleSubcribe = () => {
		if (!email) {
			setError("Please add email");
		} else {
			toast.success("You have subscribed for more updates");
		}
	};

	return (
		<div>
			<AddPortals opened={opened} setOpened={setOpened} />
			<div className="fixed left-0 right-0 top-0 p-4 border-b-2 border-black bg-gray-50">
				<div className="flex justify-between items-center">
					<div
						className="flex justify-start items-center gap-2 cursor-pointer"
						onClick={() => router.push("/")}
					>
						<img
							src="/Log Book Thumbnail.png"
							className="w-10 h-10 mx-auto rounded-md"
						/>
						<p className="text-md font-bold">Find Jobs Portals</p>
					</div>
					<Button
						// data-tf-popup="Z7vghLtB"
						// data-tf-iframe-props="title=FindJobsPortals-Adding-Portals-Form"
						// data-tf-medium="snippet"
						color="dark"
						size="md"
						variant="filled"
						onClick={() => setOpened(true)}
					>
						Add Portals
					</Button>
					<script src="//embed.typeform.com/next/embed.js"></script>
				</div>
			</div>
			<div className="min-w-full my-20">{children}</div>
			{/* <div className="border-t-2 border-black p-10 flex justify-center items-center">
				<TextInput
					name="email"
					placeholder="Enter email"
					color="dark"
					size="md"
					value={email}
					onChange={(e) => {
						const val = e.target.value;
						setEmail(val);
					}}
					className="my-2"
					error={error ? true : false}
					classNames={{ label: "text-gray-500 text-sm" }}
				/>
				<Button color="dark" variant="filled" onClick={handleSubcribe} fullWidth>
					Submit
				</Button>
			</div> */}
			<div className="p-10 flex justify-center gap-2 items-center border-t-2 border-black border-b-2">
				<div className="mx-auto w-80 border border-gray-200 hover:bg-gray-100 p-3 rounded-md">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/StoredIn%2FFrontend%20Development%20Roadmap%2FFrontend%20Master%20Guide%20-%20Thumbnail.png?alt=media&token=4201633b-7978-4fa7-86d2-06074d10ed73"
						alt="Frontend Development Roadmap Banner"
						className="w-full h-full rounded-md"
					/>
					<p className="text-xl front-bold">
						Ultimate Frontend Development Roadmap
					</p>
					<p className="text my-2">
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
				<div className="mx-auto w-80 border border-gray-200 hover:bg-gray-100 p-3 rounded-md">
					<img
						src="https://bbviewmsqgtepwkbpakl.supabase.co/storage/v1/object/sign/jobsportals/Frontend%20Magic%20Tools/Frontend%20Tools.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqb2JzcG9ydGFscy9Gcm9udGVuZCBNYWdpYyBUb29scy9Gcm9udGVuZCBUb29scy5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE1NDk1ODIsImV4cCI6MTk4NjkwOTU4Mn0.5LcbYU6EdM0WxYlwVMpAstWImoWu3ePMyyYE-sMgLbo"
						alt="Frontend Tools"
						className="w-full h-full rounded-md"
					/>
					<p className="text-xl front-bold">
						Frontend Magic: All tools at one place
					</p>
					<p className="text my-2">
						List of all frontend tools you need to build your website with ease and fast.
							An extensive list of all tools such as frameworks, UI libraries, animations, databases, data, video/audio players, canvas, pdf, payments, cookies and many more.
					</p>
					<a
						href="https://shreyvijayvargiya.gumroad.com/l/frontend-magic-all-tools-at-place?layout=profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="filled" fullWidth size="sm" color="voilet">
							Get the template
						</Button>
					</a>
				</div>
<div className="mx-auto w-80 border border-gray-200 hover:bg-gray-100 p-3 rounded-md">
					<img
						src="https://bbviewmsqgtepwkbpakl.supabase.co/storage/v1/object/sign/jobsportals/Notion%20templates/PBP%20-%201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqb2JzcG9ydGFscy9Ob3Rpb24gdGVtcGxhdGVzL1BCUCAtIDEucG5nIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNTUxMjIwLCJleHAiOjE5ODY5MTEyMjB9.PNG9z8yPuMzxVM8OG11gnqTGdi_rvIOjAXcRFq07fkM"
						alt="Frontend Tools"
						className="w-full h-full rounded-md"
					/>
					<p className="text-xl front-bold">
						Frontend Magic: All tools at one place
					</p>
					<p className="text my-2">
						List of all frontend tools you need to build your website with ease and fast.
							An extensive list of all tools such as frameworks, UI libraries, animations, databases, data, video/audio players, canvas, pdf, payments, cookies and many more.
					</p>
					<a
						href="https://shreyvijayvargiya.gumroad.com/l/ultimate-blogging-startup-kit?layout=profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="filled" fullWidth size="sm" color="voilet">
							Get the template
						</Button>
					</a>
				</div>
				<br />
			</div>
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
			<div className="flex justify-center items-center m-1 gap-4 pb-4">
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
							color={colors.black}
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
						<AiFillGithub size={24} color={colors.black} />
					</a>
				</Tooltip>
				<Tooltip label="Medium">
					<a
						href="https://medium.com/@shreyvijayvargiya26"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillMediumCircle size={24} color={colors.black} />
					</a>
				</Tooltip>
				<Tooltip label="Devto">
					<a
						href="https://dev.to/shreyvijayvargiya"
						target="_blank"
						rel="noreferrer"
					>
						<FaDev size={24} color={colors.black} />
					</a>
				</Tooltip>
				<Tooltip label="Youtube">
					<a
						href="https://www.youtube.com/channel/UC6I-Tz6QwYbJpoIK7l0NtXA"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillYoutube size={24} color={colors.black} />
					</a>
				</Tooltip>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				theme="dark"
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				style={{ zIndex: 100 }}
			/>
		</div>
	);
};

export default Body;
