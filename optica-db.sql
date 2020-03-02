

DROP DATABASE IF EXISTS optica_db;
CREATE DATABASE optica_db;
USE optica_db;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `name` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
	`last_name` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
	`email` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
	`password` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
	`avatar` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
	`category` int(10) unsigned NOT NULL DEFAULT '0',		

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
	`description` varchar(999) COLLATE utf8_unicode_ci NOT NULL,
	`price` int(10) DEFAULT NULL,
	`img1` varchar(999) COLLATE utf8_unicode_ci NOT NULL,
	`img2` varchar(999) COLLATE utf8_unicode_ci NOT NULL,
	`img3` varchar(999) COLLATE utf8_unicode_ci NOT NULL,
	`color_id` int(10) unsigned NOT NULL DEFAULT '0',	
	`category_id` int(10) unsigned NOT NULL DEFAULT '0',		

  PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


