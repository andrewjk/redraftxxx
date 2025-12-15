import { cloudflare, siteAdapter } from "@redraft/adapter-cloudflare";
import { defineSite } from "@redraft/site";
import { Site } from "@torpor/build";
import "dotenv/config";

const site: Site = new Site();

// HACK: To be able to import `.torp` files from barrel files in node_modules,
// we need to add their libraries to `ssr.noExternal`
site.viteConfig = {
	ssr: {
		noExternal: ["@torpor/ui"],
	},
};

await defineSite(site, cloudflare, siteAdapter);

export default site;
