<?php
/**
 * Plugin Name: Four Corners Project WP Block
 * Plugin URI: 
 * Description: 
 * Version: 0.2.6
 * Author: Four Corners Project, Corey Tegeler
 *
 * @package four-corners-project-wp-block
 */

defined( 'ABSPATH' ) || exit;

//REGISTER BLOCK
function fourcorners_register_block() {
  register_block_type( dirname( __FILE__ ) . '/block.json' );
}
add_action( 'init', 'fourcorners_register_block' );

//ENQUEUE LIBRARY FILES
function fourcorners_enqueue_library_files() { 
	wp_enqueue_script( 'fourcorners_js', plugin_dir_url( __FILE__ ) . 'assets/fourcorners.min.js' );
	wp_enqueue_script( 'fourcorners_block_js', plugin_dir_url( __FILE__ ) . 'build/plugin.js' );
}
add_action( 'wp_enqueue_scripts', 'fourcorners_enqueue_library_files' );

//ADD INLINE CSS
function fourcorners_add_inline_css() { 
	echo '<style>.fc-embed img {width:100%}</style>';
}
add_action( 'wp_head', 'fourcorners_add_inline_css' );

