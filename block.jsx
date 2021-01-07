import { registerBlockType } from "@wordpress/blocks";

const blockStyle = {
	backgroundColor: "#900",
	color: "#fff",
	padding: "20px"
};

console.log(blockStyle);

registerBlockType( "four_corners_block", {
	title: "Four Corners",
	icon: "universal-access-alt",
	category: "layout",
	example: {},
	edit() {
		return <div style={blockStyle}>Hello world</div>;
	},
	save() {
		return <div style={blockStyle}>Hello world</div>;
	}
} );