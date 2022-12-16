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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-12-06 21:12:59.451653'),(2,'contenttypes','0002_remove_content_type_name','2022-12-06 21:12:59.490839'),(3,'auth','0001_initial','2022-12-06 21:12:59.662949'),(4,'auth','0002_alter_permission_name_max_length','2022-12-06 21:12:59.700149'),(5,'auth','0003_alter_user_email_max_length','2022-12-06 21:12:59.706598'),(6,'auth','0004_alter_user_username_opts','2022-12-06 21:12:59.715526'),(7,'auth','0005_alter_user_last_login_null','2022-12-06 21:12:59.721479'),(8,'auth','0006_require_contenttypes_0002','2022-12-06 21:12:59.725446'),(9,'auth','0007_alter_validators_add_error_messages','2022-12-06 21:12:59.731893'),(10,'auth','0008_alter_user_username_max_length','2022-12-06 21:12:59.737845'),(11,'auth','0009_alter_user_last_name_max_length','2022-12-06 21:12:59.744293'),(12,'auth','0010_alter_group_name_max_length','2022-12-06 21:12:59.756198'),(13,'auth','0011_update_proxy_permissions','2022-12-06 21:12:59.763638'),(14,'auth','0012_alter_user_first_name_max_length','2022-12-06 21:12:59.769590'),(15,'authentication','0001_initial','2022-12-06 21:12:59.960054'),(16,'admin','0001_initial','2022-12-06 21:13:00.041397'),(17,'admin','0002_logentry_remove_auto_add','2022-12-06 21:13:00.049332'),(18,'admin','0003_logentry_add_action_flag_choices','2022-12-06 21:13:00.058260'),(19,'authentication','0002_user_is_pharmacist_user_is_technician','2022-12-06 21:13:00.117780'),(20,'cars','0001_initial','2022-12-06 21:13:00.165892'),(21,'patient_profile','0001_initial','2022-12-06 21:13:00.181765'),(22,'sessions','0001_initial','2022-12-06 21:13:00.211028'),(23,'prescription','0001_initial','2022-12-07 19:02:19.622552'),(24,'prescription','0002_alter_prescription_ndc','2022-12-07 19:18:01.288762'),(25,'prescription','0003_alter_prescription_id','2022-12-07 19:28:00.359283'),(26,'prescription','0004_alter_prescription_id','2022-12-07 19:36:35.141156'),(27,'prescription','0005_alter_prescription_id','2022-12-07 19:37:30.242060'),(28,'medication','0001_initial','2022-12-07 20:31:02.427728'),(29,'production','0001_initial','2022-12-07 20:31:02.550240'),(30,'production','0002_alter_production_patient_dob','2022-12-07 20:33:22.770166'),(31,'prescription','0006_alter_prescription_patient_id','2022-12-07 21:05:29.571767'),(32,'prescription','0007_alter_prescription_patient_id','2022-12-07 21:08:12.806017'),(33,'prescription','0008_alter_prescription_patient_id','2022-12-07 21:08:12.866034'),(34,'prescription','0009_alter_prescription_patient_id','2022-12-07 21:11:56.121760'),(35,'prescription','0010_rename_patient_id_prescription_patient','2022-12-07 21:49:36.317600'),(36,'production','0003_rename_medication_id_production_medication_and_more','2022-12-08 15:49:31.408831'),(37,'prescription','0011_alter_prescription_id','2022-12-09 21:20:55.325517'),(38,'prescription','0012_alter_prescription_id','2022-12-09 21:24:49.924856'),(39,'prescription','0013_remove_prescription_expiration_and_more','2022-12-13 19:04:20.305354'),(40,'production','0004_remove_production_medication_and_more','2022-12-13 19:04:20.577735'),(41,'prescription','0014_prescription_verified','2022-12-14 20:05:29.661155'),(42,'production','0005_production_verified','2022-12-14 20:18:18.160593');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 17:17:12
