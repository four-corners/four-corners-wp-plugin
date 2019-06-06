<?php
/**
 * Plugin Name: Four Corners for WordPress
 * Plugin URI: https://www.fourcornersproject.org
 * Description: The very first plugin that I have ever created.
 * Version: 0.0.1
 * Author: Corey Tegeler
 * Author URI: https://www.fourcornersproject.org
 */

function four_corners_scripts() {

	$ver = '0.0.1';
	wp_enqueue_script( 'four_corners_script', plugin_dir_path() . '/fourcorners.js/dist/four-corners.min.js', array(), $ver, true );
	wp_enqueue_style( 'four_corners_style', plugin_dir_path() . '/fourcorners.js/dist/four-corners.min.css' );

}

add_action( 'wp_enqueue_scripts', 'four_corners_scripts' );

?>