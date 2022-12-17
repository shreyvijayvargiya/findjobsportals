import getMetaData from "metadata-scraper";
import { supabaseApp } from "../../utils/supabase";

module.exports = async (req, res) => {
  const finalMetadata = [];
  // const portals = req.body.data;
  // portals.forEach(async(item) => {
  //   const { error, data } = await supabaseApp
	// 		.from("Portals_duplicate")
	// 		.insert({
	// 			"title": item.title,
	// 			"id": item.id,
	// 			"domain": item.domain,
	// 			"name": item.name,
	// 			"website": item.website,
	// 			"icon": item?.icon,
	// 			"image": item?.image,
	// 			"description": item.description,
	// 			"twitter": item.twitter,
	// 		})
	// 		.eq("id", item.id);
  //     console.log(data, error)
  // })
  // res.send(req.body.data);
	const { data: portals } = await await supabaseApp
		.from("Portals")
		.select("*");
	portals.forEach(async (item) => {
		const data = await getMetaData(item.website);
		const newData = {
      "title": item.title,
			"id": item.id,
			"domain": item.domain,
			"name": item.name,
			"website": item.website,
			"icon": data?.icon,
			"image": data?.image,
			"description": data.description,
			"twitter": data.twitter,
		};
    finalMetadata.push(newData);
    console.log(JSON.stringify(finalMetadata), "data")
    return
	});
	res.send(finalMetadata);
};
