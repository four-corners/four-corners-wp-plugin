<?php
/**
 * Plugin Name: Four Corners for WordPress
 * Plugin URI: https://www.fourcornersproject.org
 * Description: Loads necessary scripts to easily publish Four Corners photos
 * Version: 0.0.3
 * Author: Corey Tegeler
 * Author URI: https://www.fourcornersproject.org
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function four_corners_plugin_scripts() {
	$plugin_ver = '0.0.4';
	$lib_ver = '0.2.0';
	wp_enqueue_style( 'four_corners_style', plugin_dir_url( __FILE__ ) . 'assets/fourcorners.min.css', array(), $lib_ver );
	wp_enqueue_script( 'four_corners_script', plugin_dir_url( __FILE__ ) . 'assets/fourcorners.min.js', array(), $lib_ver, true );
	wp_enqueue_script( 'four_corners_plugin_script', plugin_dir_url( __FILE__ ) . 'fourcorners-wp-plugin.js', array(), $plugin_ver, true );
}

add_action( 'wp_enqueue_scripts', 'four_corners_plugin_scripts' );

function register_four_corners_block() {

	$handle = 'four_corners_block';
	$src = plugins_url( 'block.js', __FILE__ );
	$deps = array( 'wp-blocks', 'wp-element', 'wp-editor' );
	$ver = false;
	$in_footer = $false;	

	wp_register_script( $handle, $src, $deps, $ver, $in_footer );

	$name = 'four_corners_embed';
	$args = array(
		'editors_script' => 'four_corners_block'
	);

	register_block_type( $name, $args );
}

add_action( 'init', 'register_four_corners_block' );