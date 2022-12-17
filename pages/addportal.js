import Head from "next/head";
import React, { useState } from "react";
import { Modal, TextInput, Button } from "@mantine/core";
import { toast } from "react-toastify";
import { addPortal } from "../utils/api/supabaseApi";

const AddPortalPage = () => {
  const [values, setValues] = useState({
		email: "",
		website: "",
	});

	const [error, setError] = useState("");

	const submitPortal = (e) => {
		e.preventDefault();
		if (!values || !values.email || !values.website) {
			setError("Please add all the fields");
		} else {
			setError("");
			addPortal(values);
			toast.success(
				"Your portal is submit successfully, we will review and return within 24 hours"
			);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prevState) => ({ ...prevState, [name]: value }));
	};

  return (
		<div>
			<Head>
				<title>Add portals</title>
			</Head>
      <div className="md:w-1/5 xxs:w-full xs:w-full sm:w-full mx-auto py-10">
        <TextInput
          name="email"
          placeholder="Enter email"
          color="dark"
          size="md"
          value={values.email}
          onChange={handleChange}
          label="We will get in touch over email after revewing within 24 hours"
          className="my-2"
          error={error ? true : false}
          classNames={{ label: "text-gray-500 text-sm" }}
        />
        <TextInput
          name="website"
          placeholder="Enter website"
          color="dark"
          size="md"
          className="my-2"
          error={error ? true : false}
          onChange={handleChange}
          value={values.website}
        />
        {error && (
          <span className="text-sm my-2 text-red-500">
            Please add all the fields
          </span>
        )}
        <Button color="dark" variant="filled" onClick={submitPortal} fullWidth>
          Submit
        </Button>
      </div>
		</div>
	);
};
export default AddPortalPage;
