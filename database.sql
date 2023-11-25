-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 25, 2023 at 05:30 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carseller`
--
CREATE DATABASE IF NOT EXISTS `carseller` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `carseller`;

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `id` bigint(20) NOT NULL,
  `air_bag` varchar(255) DEFAULT NULL,
  `anti_theft` varchar(255) DEFAULT NULL,
  `auto_lock` varchar(255) DEFAULT NULL,
  `back_camera` varchar(255) DEFAULT NULL,
  `door_handle` varchar(255) DEFAULT NULL,
  `front_brakes` varchar(255) DEFAULT NULL,
  `front_fog_light` varchar(255) DEFAULT NULL,
  `gas_cap` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `num_car_seat` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `rear_brakes` varchar(255) DEFAULT NULL,
  `seat_material` varchar(255) DEFAULT NULL,
  `wiper_blade` varchar(255) DEFAULT NULL,
  `wswandgl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` bigint(20) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `car_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `model_id` bigint(20) NOT NULL,
  `name_model` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `service_id` bigint(20) NOT NULL,
  `name_service` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_plan`
--

CREATE TABLE `service_plan` (
  `service_plan_id` bigint(20) NOT NULL,
  `date` date DEFAULT NULL,
  `distribution_center` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `license_plate` varchar(255) DEFAULT NULL,
  `number_phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `model_id` bigint(20) DEFAULT NULL,
  `service_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `testing_register`
--

CREATE TABLE `testing_register` (
  `testing_register_id` bigint(20) NOT NULL,
  `carpd` varchar(255) DEFAULT NULL,
  `distribution_center` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `number_phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `car_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `version`
--

CREATE TABLE `version` (
  `version_id` bigint(20) NOT NULL,
  `model_id` bigint(20) NOT NULL,
  `name_version` varchar(255) DEFAULT NULL,
  `car_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8qrw1u2o1gvqbbykf2faudhtw` (`car_id`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`model_id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `service_plan`
--
ALTER TABLE `service_plan`
  ADD PRIMARY KEY (`service_plan_id`),
  ADD UNIQUE KEY `UK_drsldya6kvhhjjsw2kdij6k3` (`model_id`),
  ADD UNIQUE KEY `UK_7syjt1j7aibal9gr1c4vaahqe` (`service_id`);

--
-- Indexes for table `testing_register`
--
ALTER TABLE `testing_register`
  ADD PRIMARY KEY (`testing_register_id`),
  ADD UNIQUE KEY `UK_19csw5pdiqurmah64iyh8xkau` (`car_id`);

--
-- Indexes for table `version`
--
ALTER TABLE `version`
  ADD PRIMARY KEY (`version_id`),
  ADD UNIQUE KEY `UK_rg7rjjb9i2oemnxvrrphwcq01` (`car_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `model_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_plan`
--
ALTER TABLE `service_plan`
  MODIFY `service_plan_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testing_register`
--
ALTER TABLE `testing_register`
  MODIFY `testing_register_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `version`
--
ALTER TABLE `version`
  MODIFY `version_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `color`
--
ALTER TABLE `color`
  ADD CONSTRAINT `FK8qrw1u2o1gvqbbykf2faudhtw` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

--
-- Constraints for table `service_plan`
--
ALTER TABLE `service_plan`
  ADD CONSTRAINT `FK20vmbecpvumi0kc93d6l2tq67` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`),
  ADD CONSTRAINT `FKpumui605n9v0n1dfs47jn6usb` FOREIGN KEY (`model_id`) REFERENCES `model` (`model_id`);

--
-- Constraints for table `testing_register`
--
ALTER TABLE `testing_register`
  ADD CONSTRAINT `FKb8t7vlvxdlg1r320s4j7tc6j2` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

--
-- Constraints for table `version`
--
ALTER TABLE `version`
  ADD CONSTRAINT `FKe4g1l9cqd5nmff1n6tlmsqfcc` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);
--
-- Database: `fullstack`
--
CREATE DATABASE IF NOT EXISTS `fullstack` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fullstack`;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

--
-- Dumping data for table `pma__export_templates`
--

INSERT INTO `pma__export_templates` (`id`, `username`, `export_type`, `template_name`, `template_data`) VALUES
(1, 'root', 'server', 'database', '{\"quick_or_custom\":\"quick\",\"what\":\"sql\",\"db_select[]\":[\"carseller\",\"fullstack\",\"phpmyadmin\",\"quan_ly_ban_quan_ao\",\"schooldb\",\"test\",\"vutrudongho\",\"web\",\"web1\"],\"aliases_new\":\"\",\"output_format\":\"sendit\",\"filename_template\":\"@SERVER@\",\"remember_template\":\"on\",\"charset\":\"utf-8\",\"compression\":\"none\",\"maxsize\":\"\",\"codegen_structure_or_data\":\"data\",\"codegen_format\":\"0\",\"csv_separator\":\",\",\"csv_enclosed\":\"\\\"\",\"csv_escaped\":\"\\\"\",\"csv_terminated\":\"AUTO\",\"csv_null\":\"NULL\",\"csv_structure_or_data\":\"data\",\"excel_null\":\"NULL\",\"excel_columns\":\"something\",\"excel_edition\":\"win\",\"excel_structure_or_data\":\"data\",\"json_structure_or_data\":\"data\",\"json_unicode\":\"something\",\"latex_caption\":\"something\",\"latex_structure_or_data\":\"structure_and_data\",\"latex_structure_caption\":\"Structure of table @TABLE@\",\"latex_structure_continued_caption\":\"Structure of table @TABLE@ (continued)\",\"latex_structure_label\":\"tab:@TABLE@-structure\",\"latex_relation\":\"something\",\"latex_comments\":\"something\",\"latex_mime\":\"something\",\"latex_columns\":\"something\",\"latex_data_caption\":\"Content of table @TABLE@\",\"latex_data_continued_caption\":\"Content of table @TABLE@ (continued)\",\"latex_data_label\":\"tab:@TABLE@-data\",\"latex_null\":\"\\\\textit{NULL}\",\"mediawiki_structure_or_data\":\"data\",\"mediawiki_caption\":\"something\",\"mediawiki_headers\":\"something\",\"htmlword_structure_or_data\":\"structure_and_data\",\"htmlword_null\":\"NULL\",\"ods_null\":\"NULL\",\"ods_structure_or_data\":\"data\",\"odt_structure_or_data\":\"structure_and_data\",\"odt_relation\":\"something\",\"odt_comments\":\"something\",\"odt_mime\":\"something\",\"odt_columns\":\"something\",\"odt_null\":\"NULL\",\"pdf_report_title\":\"\",\"pdf_structure_or_data\":\"data\",\"phparray_structure_or_data\":\"data\",\"sql_include_comments\":\"something\",\"sql_header_comment\":\"\",\"sql_use_transaction\":\"something\",\"sql_compatibility\":\"NONE\",\"sql_structure_or_data\":\"structure_and_data\",\"sql_create_table\":\"something\",\"sql_auto_increment\":\"something\",\"sql_create_view\":\"something\",\"sql_create_trigger\":\"something\",\"sql_backquotes\":\"something\",\"sql_type\":\"INSERT\",\"sql_insert_syntax\":\"both\",\"sql_max_query_size\":\"50000\",\"sql_hex_for_binary\":\"something\",\"sql_utc_time\":\"something\",\"texytext_structure_or_data\":\"structure_and_data\",\"texytext_null\":\"NULL\",\"yaml_structure_or_data\":\"data\",\"\":null,\"as_separate_files\":null,\"csv_removeCRLF\":null,\"csv_columns\":null,\"excel_removeCRLF\":null,\"json_pretty_print\":null,\"htmlword_columns\":null,\"ods_columns\":null,\"sql_dates\":null,\"sql_relation\":null,\"sql_mime\":null,\"sql_disable_fk\":null,\"sql_views_as_tables\":null,\"sql_metadata\":null,\"sql_drop_database\":null,\"sql_drop_table\":null,\"sql_if_not_exists\":null,\"sql_simple_view_export\":null,\"sql_view_current_user\":null,\"sql_or_replace_view\":null,\"sql_procedure_function\":null,\"sql_truncate\":null,\"sql_delayed\":null,\"sql_ignore\":null,\"texytext_columns\":null}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2023-11-25 16:30:50', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `quan_ly_ban_quan_ao`
--
CREATE DATABASE IF NOT EXISTS `quan_ly_ban_quan_ao` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `quan_ly_ban_quan_ao`;
--
-- Database: `schooldb`
--
CREATE DATABASE IF NOT EXISTS `schooldb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `schooldb`;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--
-- Error reading structure for table schooldb.course: #1932 - Table &#039;schooldb.course&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.course: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`course`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `course_material`
--
-- Error reading structure for table schooldb.course_material: #1932 - Table &#039;schooldb.course_material&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.course_material: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`course_material`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `course_material_sequence`
--
-- Error reading structure for table schooldb.course_material_sequence: #1932 - Table &#039;schooldb.course_material_sequence&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.course_material_sequence: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`course_material_sequence`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `course_sequence`
--
-- Error reading structure for table schooldb.course_sequence: #1932 - Table &#039;schooldb.course_sequence&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.course_sequence: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`course_sequence`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `student`
--
-- Error reading structure for table schooldb.student: #1932 - Table &#039;schooldb.student&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.student: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`student`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `student_course_maping`
--
-- Error reading structure for table schooldb.student_course_maping: #1932 - Table &#039;schooldb.student_course_maping&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.student_course_maping: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`student_course_maping`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `student_sequence`
--
-- Error reading structure for table schooldb.student_sequence: #1932 - Table &#039;schooldb.student_sequence&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.student_sequence: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`student_sequence`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student`
--
-- Error reading structure for table schooldb.tbl_student: #1932 - Table &#039;schooldb.tbl_student&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.tbl_student: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`tbl_student`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--
-- Error reading structure for table schooldb.teacher: #1932 - Table &#039;schooldb.teacher&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.teacher: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`teacher`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `teacher_sequence`
--
-- Error reading structure for table schooldb.teacher_sequence: #1932 - Table &#039;schooldb.teacher_sequence&#039; doesn&#039;t exist in engine
-- Error reading data for table schooldb.teacher_sequence: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `schooldb`.`teacher_sequence`&#039; at line 1
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
--
-- Database: `vutrudongho`
--
CREATE DATABASE IF NOT EXISTS `vutrudongho` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vutrudongho`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--
-- Error reading structure for table vutrudongho.admin: #1932 - Table &#039;vutrudongho.admin&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.admin: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`admin`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--
-- Error reading structure for table vutrudongho.brand: #1932 - Table &#039;vutrudongho.brand&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.brand: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`brand`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--
-- Error reading structure for table vutrudongho.cart: #1932 - Table &#039;vutrudongho.cart&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.cart: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`cart`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `inventoryreceivingvoucher`
--
-- Error reading structure for table vutrudongho.inventoryreceivingvoucher: #1932 - Table &#039;vutrudongho.inventoryreceivingvoucher&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.inventoryreceivingvoucher: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`inventoryreceivingvoucher`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `order`
--
-- Error reading structure for table vutrudongho.order: #1932 - Table &#039;vutrudongho.order&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.order: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`order`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `orderstatus`
--
-- Error reading structure for table vutrudongho.orderstatus: #1932 - Table &#039;vutrudongho.orderstatus&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.orderstatus: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`orderstatus`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `order_line`
--
-- Error reading structure for table vutrudongho.order_line: #1932 - Table &#039;vutrudongho.order_line&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.order_line: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`order_line`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--
-- Error reading structure for table vutrudongho.payment: #1932 - Table &#039;vutrudongho.payment&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.payment: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`payment`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `product`
--
-- Error reading structure for table vutrudongho.product: #1932 - Table &#039;vutrudongho.product&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.product: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`product`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `product_quantity`
--
-- Error reading structure for table vutrudongho.product_quantity: #1932 - Table &#039;vutrudongho.product_quantity&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.product_quantity: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`product_quantity`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `receivingdetail`
--
-- Error reading structure for table vutrudongho.receivingdetail: #1932 - Table &#039;vutrudongho.receivingdetail&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.receivingdetail: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`receivingdetail`&#039; at line 1

--
-- Triggers `receivingdetail`
--
DELIMITER $$
CREATE TRIGGER `trg_receivingdetail_afterdel` AFTER DELETE ON `receivingdetail` FOR EACH ROW update `product` set `CanDel` = 1 where ProductID = old.ProductID and canDel = 0 and ProductID not in (select distinct ProductID from `order_line` where ProductID = old.ProductID) and ProductID not in (select distinct ProductID from `receivingdetail` where ProductID = old.ProductID)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--
-- Error reading structure for table vutrudongho.supplier: #1932 - Table &#039;vutrudongho.supplier&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.supplier: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`supplier`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `user`
--
-- Error reading structure for table vutrudongho.user: #1932 - Table &#039;vutrudongho.user&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.user: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`user`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--
-- Error reading structure for table vutrudongho.voucher: #1932 - Table &#039;vutrudongho.voucher&#039; doesn&#039;t exist in engine
-- Error reading data for table vutrudongho.voucher: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `vutrudongho`.`voucher`&#039; at line 1
--
-- Database: `web`
--
CREATE DATABASE IF NOT EXISTS `web` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `web`;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--
-- Error reading structure for table web.account: #1932 - Table &#039;web.account&#039; doesn&#039;t exist in engine
-- Error reading data for table web.account: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`account`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `category`
--
-- Error reading structure for table web.category: #1932 - Table &#039;web.category&#039; doesn&#039;t exist in engine
-- Error reading data for table web.category: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`category`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--
-- Error reading structure for table web.customer: #1932 - Table &#039;web.customer&#039; doesn&#039;t exist in engine
-- Error reading data for table web.customer: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`customer`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `group_roles`
--
-- Error reading structure for table web.group_roles: #1932 - Table &#039;web.group_roles&#039; doesn&#039;t exist in engine
-- Error reading data for table web.group_roles: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`group_roles`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--
-- Error reading structure for table web.invoice: #1932 - Table &#039;web.invoice&#039; doesn&#039;t exist in engine
-- Error reading data for table web.invoice: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`invoice`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--
-- Error reading structure for table web.invoice_detail: #1932 - Table &#039;web.invoice_detail&#039; doesn&#039;t exist in engine
-- Error reading data for table web.invoice_detail: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`invoice_detail`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `order`
--
-- Error reading structure for table web.order: #1932 - Table &#039;web.order&#039; doesn&#039;t exist in engine
-- Error reading data for table web.order: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`order`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--
-- Error reading structure for table web.order_detail: #1932 - Table &#039;web.order_detail&#039; doesn&#039;t exist in engine
-- Error reading data for table web.order_detail: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`order_detail`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `product`
--
-- Error reading structure for table web.product: #1932 - Table &#039;web.product&#039; doesn&#039;t exist in engine
-- Error reading data for table web.product: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`product`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--
-- Error reading structure for table web.product_detail: #1932 - Table &#039;web.product_detail&#039; doesn&#039;t exist in engine
-- Error reading data for table web.product_detail: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`product_detail`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `role`
--
-- Error reading structure for table web.role: #1932 - Table &#039;web.role&#039; doesn&#039;t exist in engine
-- Error reading data for table web.role: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`role`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `role_in_group`
--
-- Error reading structure for table web.role_in_group: #1932 - Table &#039;web.role_in_group&#039; doesn&#039;t exist in engine
-- Error reading data for table web.role_in_group: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`role_in_group`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `type_product`
--
-- Error reading structure for table web.type_product: #1932 - Table &#039;web.type_product&#039; doesn&#039;t exist in engine
-- Error reading data for table web.type_product: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web`.`type_product`&#039; at line 1
--
-- Database: `web1`
--
CREATE DATABASE IF NOT EXISTS `web1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `web1`;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--
-- Error reading structure for table web1.product: #1932 - Table &#039;web1.product&#039; doesn&#039;t exist in engine
-- Error reading data for table web1.product: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `web1`.`product`&#039; at line 1
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
