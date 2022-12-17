import { supabaseApp } from "../supabase";
import { toast } from "react-toastify";

export const portalsFromSupabase = async () => {
	const { data: portals } = await supabaseApp.from("Portals_duplicate").select("*");
	return portals;
};

export const addPortal = async(values) => {
	const data = await supabaseApp.from("Portals_submission").insert(values).eq("email", values.email)
	return data;
}