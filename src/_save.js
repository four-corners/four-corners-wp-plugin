import {
	useBlockProps
} from "@wordpress/block-editor";

export default function Save({ attributes, children }) {
	return(
		<div { ...useBlockProps.save( { className: "fc-embed" } ) }>
			{attributes.image ?
				<img src={attributes.image.url} />
			: null}
		</div>
	)
}