CREATE DATABASE  IF NOT EXISTS `care_capstone_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `care_capstone_database`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: care_capstone_database
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_authentication_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_authentication_user_id` FOREIGN KEY (`user_id`) REFERENCES `authentication_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-12-06 21:21:18.079867','1','Patient object (1)',2,'[]',8,1),(2,'2022-12-06 21:22:06.781342','2','Patient object (2)',1,'[{\"added\": {}}]',8,1),(3,'2022-12-06 21:23:03.307671','3','Patient object (3)',1,'[{\"added\": {}}]',8,1),(4,'2022-12-07 19:06:19.521931','4','Patient object (4)',1,'[{\"added\": {}}]',8,1),(5,'2022-12-07 19:21:43.519415','5','5 Bupropion HCl Le',1,'[{\"added\": {}}]',9,1),(6,'2022-12-07 19:25:08.501644','6','6 Sertraline HCl Wong',1,'[{\"added\": {}}]',9,1),(7,'2022-12-07 19:34:13.042265','1','1 No-hoes Nguyen',1,'[{\"added\": {}}]',9,1),(8,'2022-12-07 19:56:18.784389','1','ledavid',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]',6,1),(9,'2022-12-07 20:32:19.230985','1','Bupropion HCl 100 mg',1,'[{\"added\": {}}]',11,1),(10,'2022-12-07 20:33:46.842324','1','1 Rx: 5 Bupropion HCl Le Bupropion HCl 100 mg Le 1998-01-06',1,'[{\"added\": {}}]',10,1),(11,'2022-12-07 20:33:52.140794','1','1 Rx: 5 Bupropion HCl Le Bupropion HCl 100 mg Le 1998-01-06',2,'[]',10,1),(12,'2022-12-07 20:38:10.856865','1','1 Rx: Bupropion HCl 100 mg Le 1998-01-06',2,'[]',10,1),(13,'2022-12-07 21:11:00.404568','2','2 Sertraline HCl Le',3,'',9,1),(14,'2022-12-07 21:11:09.928104','4','4 Sertraline HCl Le',3,'',9,1),(15,'2022-12-07 21:11:10.047867','3','3 Sertraline HCl Le',3,'',9,1),(16,'2022-12-08 15:50:22.533138','1','1 Rx: Bupropion HCl 100 mg Le 1998-01-06',2,'[]',10,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 17:27:35
