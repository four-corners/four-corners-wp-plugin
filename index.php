<?php

/**
 * Plugin Name: Four Corners Project WP Block
 * Plugin URI: 
 * Description: 
 * Version: 0.1.1
 * Author: Four Corners Project, Corey Tegeler
 *
 * @package four-corners-project-wp-block
 */

defined( 'ABSPATH' ) || exit;

//REGISTER BLOCK
function fourcorners_register_blocks() {
  register_block_type( dirname( __FILE__ ) . '/block.json' );
}
add_action( 'init', 'fourcorners_register_blocks' );

//ENQUE LIBRARY FILES
function fourcorners_enque_library_files() { 
	$ver = "0.7.2";
	wp_enqueue_script( 'fourcorners_js', plugin_dir_url( __FILE__ ) . 'assets/fourcorners.min.js?v=' . $ver );
	wp_enqueue_style( 'fourcorners_css',  plugin_dir_url( __FILE__ ) . 'assets/fourcorners.min.css?v=' . $ver );
}
add_action('wp_enqueue_scripts', 'fourcorners_enque_library_files');

//INJECT LOADING SCRIPT
function fourcorners_loading_script() { ?>
	<script type="text/javascript">
		window.addEventListener("load", function() {
			document.querySelectorAll(".fc-embed").forEach((embed) => {
				new FourCorners(embed, {
					caption: true,
					credit: true,
					logo: true,
					dark: false
				}, {
					wasmSrc: "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/assets/wasm/toolkit_bg.wasm",
					workerSrc: "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/cai-sdk.worker.min.js"
				});
			});
		});
	</script>
<?php }
add_action('wp_head', 'fourcorners_loading_script');