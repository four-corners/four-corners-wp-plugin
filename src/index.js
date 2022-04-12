import { registerBlockType } from "@wordpress/blocks";

import Edit from "./_edit";
import Save from "./_save";

registerBlockType("fourcorners/block", {
	edit: Edit,
	save: Save,
});
