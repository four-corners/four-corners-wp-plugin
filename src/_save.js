import {
	useBlockProps
} from "@wordpress/block-editor";

export default function Save({ attributes, children }) {
	const src = attributes.image && attributes.image.sizes ? attributes.image.sizes.full.url : null;
	return(
		<div { ...useBlockProps.save( {
			className: "fc-embed",
			"data-src": src,
		} ) }>
			{src ?
				<img src={src} />
			: null}
			{/*{attributes.data || attributes.options ?
				<script type="application/json">
					{ JSON.stringify({ ...attributes.data, options: attributes.options }) }
				</script>
			: null}*/}
		</div>
	)
}