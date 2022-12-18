import { supabaseApp } from "../supabase";

export const portalsFromSupabase = async () => {
	const { data: portals } = await supabaseApp.from("Portals_duplicate").select("*");
	return portals;
};

export const addPortal = async(values) => {
	const data = await supabaseApp.from("Portals_submission").insert(values).eq("email", values.email)
	return data;
}

export const googleLoginSupabase = async(req, res) => {
	const data = await supabaseApp.auth.signIn({ provider: "google"});
	console.log(data);
}
