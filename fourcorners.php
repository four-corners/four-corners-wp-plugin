<?php
/**
 * Plugin Name: Four Corners for WordPress
 * Plugin URI: https://www.fourcornersproject.org
 * Description: Loads necessary scripts to easily publish Four Corners photos
 * Version: 0.0.1
 * Author: Corey Tegeler
 * Author URI: https://www.fourcornersproject.org
 */

function four_corners_scripts() {
	$plugin_ver = '0.0.1';
	$lib_ver = '0.1.2';
	wp_enqueue_script( 'four_corners_script', plugin_dir_path( 'fourcorners-wp-plugin.js' ), array(), $plugin_ver, true );
	wp_enqueue_script( 'four_corners_script', plugin_dir_path( '/fourcorners.js/dist/four-corners.min.js' ), array(), $lib_ver, true );
	wp_enqueue_style( 'four_corners_style', plugin_dir_path( '/fourcorners.js/dist/four-corners.min.css', $lib_ver ) );

}

add_action( 'wp_enqueue_scripts', 'four_corners_scripts' );

?>