<?php
/**
 * Plugin Name: Four Corners for WordPress
 * Plugin URI: https://www.fourcornersproject.org
 * Description: Loads necessary scripts to easily publish Four Corners photos
 * Version: 0.0.2
 * Author: Corey Tegeler
 * Author URI: https://www.fourcornersproject.org
 */

function four_corners_plugin_scripts() {
	$plugin_ver = '0.0.2';
	$lib_ver = '0.1.9';
	wp_enqueue_style( 'four_corners_style', plugin_dir_url( __FILE__ ) . 'fourcorners.js/dist/fourcorners.min.css', array(), $lib_ver );
	wp_enqueue_script( 'four_corners_script', plugin_dir_url( __FILE__ ) . 'fourcorners.js/dist/fourcorners.min.js', array(), $lib_ver, true );
	wp_enqueue_script( 'four_corners_plugin_script', plugin_dir_url( __FILE__ ) . 'fourcorners-wp-plugin.js', array(), $plugin_ver, true );
}

add_action( 'wp_enqueue_scripts', 'four_corners_plugin_scripts' );

?>