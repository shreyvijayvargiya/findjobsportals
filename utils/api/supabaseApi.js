import { supabaseApp } from "../supabase";

export const portalsFromSupabase = async () => {
	const { data: portals } = await supabaseApp.from("Portals").select("*");
	return portals;
};
