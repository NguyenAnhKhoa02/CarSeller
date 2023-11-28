-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 28, 2023 at 04:56 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
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

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`id`, `air_bag`, `anti_theft`, `auto_lock`, `back_camera`, `door_handle`, `front_brakes`, `front_fog_light`, `gas_cap`, `info`, `num_car_seat`, `price`, `rear_brakes`, `seat_material`, `wiper_blade`, `wswandgl`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 5, 0, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
CREATE TABLE IF NOT EXISTS `color` (
  `id` bigint(20) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `car_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
CREATE TABLE IF NOT EXISTS `model` (
  `model_id` bigint(20) NOT NULL,
  `name_model` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `model`
--

INSERT INTO `model` (`model_id`, `name_model`) VALUES
(1, 'model1');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
CREATE TABLE IF NOT EXISTS `service` (
  `service_id` bigint(20) NOT NULL,
  `name_service` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_plan`
--

DROP TABLE IF EXISTS `service_plan`;
CREATE TABLE IF NOT EXISTS `service_plan` (
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

DROP TABLE IF EXISTS `testing_register`;
CREATE TABLE IF NOT EXISTS `testing_register` (
  `testing_register_id` bigint(20) NOT NULL,
  `carpd` varchar(255) DEFAULT NULL,
  `distribution_center` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `number_phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `version_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `version`
--

DROP TABLE IF EXISTS `version`;
CREATE TABLE IF NOT EXISTS `version` (
  `version_id` bigint(20) NOT NULL,
  `name_version` varchar(255) DEFAULT NULL,
  `car_id` bigint(20) DEFAULT NULL,
  `model_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `version`
--

INSERT INTO `version` (`version_id`, `name_version`, `car_id`, `model_id`) VALUES
(1, 'version name', 1, 1);

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
  ADD UNIQUE KEY `UK_a2ks3ngm0lg79rmv4ep6wbhvj` (`version_id`);

--
-- Indexes for table `version`
--
ALTER TABLE `version`
  ADD PRIMARY KEY (`version_id`),
  ADD UNIQUE KEY `UK_rg7rjjb9i2oemnxvrrphwcq01` (`car_id`),
  ADD KEY `FKwu0dfb5kwp3o83seid89ao0r` (`model_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `model_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `version_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `FK33gtm6ddv00sy6vr7wy93fa96` FOREIGN KEY (`version_id`) REFERENCES `version` (`version_id`);

--
-- Constraints for table `version`
--
ALTER TABLE `version`
  ADD CONSTRAINT `FKe4g1l9cqd5nmff1n6tlmsqfcc` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`),
  ADD CONSTRAINT `FKwu0dfb5kwp3o83seid89ao0r` FOREIGN KEY (`model_id`) REFERENCES `model` (`model_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
