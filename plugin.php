<?php 

/** 
 * Plugin Name: Hanhaa Gutenberg 
 * Author: Stephen Hartnett
 * Version: 0.0.1
*/


function loadMyBlockFiles() {
wp_enqueue_script(
    'hanhaa-gutenberg',
    plugin_dir_url (__FILE__) . 'my-block.js',
    array('wp-blocks' , 'wp-i18n', 'wp-editor'),
    true
);

}

add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');
