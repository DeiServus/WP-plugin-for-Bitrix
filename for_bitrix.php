<?php
/*
Plugin Name: Plugin for Bitrix
Description: This plugin saves form submissions and sends them to Bitrix.
Version: 1.0
Author: Ilyusha
*/
?>

<?php 
    function enqueue_my_script() {
        wp_enqueue_script(
            'my-script', // Уникальное имя скрипта
            plugins_url('/script.js', __FILE__), // Путь к файлу скрипта
            array(), // Зависимости скрипта
            '1.0.0', // Версия скрипта
            true // Подключить скрипт в footer
        );
    }
    add_action('wp_enqueue_scripts', 'enqueue_my_script');
?>