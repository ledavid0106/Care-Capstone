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
-- Table structure for table `prescription_prescription`
--

DROP TABLE IF EXISTS `prescription_prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription_prescription` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL,
  `patient_first_name` varchar(255) NOT NULL,
  `patient_middle_name` varchar(255) NOT NULL,
  `patient_last_name` varchar(255) NOT NULL,
  `patient_dob` date NOT NULL,
  `generic_name` varchar(255) NOT NULL,
  `ndc` varchar(255) NOT NULL,
  `dosage` varchar(255) NOT NULL,
  `vessel` varchar(255) NOT NULL,
  `volume` varchar(255) NOT NULL,
  `sig` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  `ordering_doctor` varchar(255) NOT NULL,
  `ordering_doctor_phone_number` varchar(255) NOT NULL,
  `indication` varchar(255) NOT NULL,
  `patient_id` bigint NOT NULL,
  `verified` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription_prescri_patient_id_id_de7fa9e8_fk_patient_p` (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_prescription`
--

LOCK TABLES `prescription_prescription` WRITE;
/*!40000 ALTER TABLE `prescription_prescription` DISABLE KEYS */;
INSERT INTO `prescription_prescription` VALUES (1,1,'Tommy','NA','Nguyen','1998-10-31','albuterol sulfate','51407-368','4 mg/1','Tablet','NA','2 Puffs a Day','QDaily','PO','Dr. Le','619-908-0953','SinglePringle',2,NULL),(4,1,'David','NA','Le','1998-01-06','Sertraline','70518-2512','25 mg/1','Tablet','N/A','Take by mouth twice a day','BID','PO','Dr. Larson','916-726-4466','Depression',4,NULL),(5,1,'David','NA','Le','1998-01-06','bupropion hydrochloride','76282-480','150 mg/1','Tablet','N/A','Take by mouth twice a day','BID','PO','Dr. Larson','916-726-4466','Depression',4,NULL),(6,1,'Tiffany','Saelinh','Wong','1994-10-22','Sertraline','70518-2512','25 mg/1','Tablet','N/A','Take by mouth once a day','QDaily','PO','Dr. Wong','619-123-4567','Seasonal  Depression',3,NULL),(24,1,'Tommy','N/A','Nguyen','1998-10-31','bupropion hydrochloride','76282-480','150 mg/1','Tablet','N/A','Take by mouth once a day','QDaily','By Mouth','Dr. Wong','916-726-4466','Seasonal  Depression',2,NULL);
/*!40000 ALTER TABLE `prescription_prescription` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 17:17:13
