import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import colors from "tailwindcss/colors";

const PortalModal = ({ portal, opened, setOpened }) => {
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
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title={portal?.name}
				classNames={{
					title: "text-3xl",
					root: "w-100 mx-auto",
				}}
			>
				{portal ? (
					<>
						{portal.image && <div className="border border-gray-300 rounded-md">
							<img
								className="w-full h-auto mx-auto rounded-md"
								src={portal.image}
							/>
						</div>}
						<p className="text-md my-2">{portal.description}</p>
						<a
							href={portal.website}
							target="_blank"
							className="underline text-pink-600"
						>
							React Website
						</a>
						<br />
						<p className="mt-4">Category</p>
						<div className="flex justify-start items-center gap-1">
							{portal.domain.map((element) => (
								<span
									className="rounded-md py-2 px-4 m-2 text-xs font-semibold"
									style={{ backgroundColor: getBadgeColor(element) }}
								>
									{element}
								</span>
							))}
						</div>
					</>
				) : null}
			</Modal>
		</>
	);
};
export default PortalModal;
