CREATE DATABASE  IF NOT EXISTS `school_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `school_db`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school_db
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
-- Table structure for table `school_db_studentcourse`
--

DROP TABLE IF EXISTS `school_db_studentcourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school_db_studentcourse` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `grade` varchar(20) NOT NULL,
  `course_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_student_course` (`student_id`,`course_id`),
  KEY `school_db_studentcou_course_id_976cbdfd_fk_school_db` (`course_id`),
  CONSTRAINT `school_db_studentcou_course_id_976cbdfd_fk_school_db` FOREIGN KEY (`course_id`) REFERENCES `school_db_course` (`id`),
  CONSTRAINT `school_db_studentcou_student_id_8508decd_fk_school_db` FOREIGN KEY (`student_id`) REFERENCES `school_db_student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_db_studentcourse`
--

LOCK TABLES `school_db_studentcourse` WRITE;
/*!40000 ALTER TABLE `school_db_studentcourse` DISABLE KEYS */;
INSERT INTO `school_db_studentcourse` VALUES (1,'A+',5,1),(2,'A',1,1),(3,'A',2,1),(4,'B+',9,10),(5,'A',10,2),(6,'B-',8,2),(7,'A+',2,2),(8,'A',4,10),(9,'C+',3,3),(10,'B',1,3),(11,'B-',2,3),(12,'B+',7,10),(13,'A+',10,4),(14,'A-',7,4),(15,'A+',5,4),(16,'B+',4,5),(17,'A+',5,5),(18,'A',1,5),(19,'C',2,5),(20,'B+',6,6),(21,'A',10,6),(22,'B-',8,6),(23,'A+',9,7),(24,'A',4,7),(25,'C+',3,7),(26,'B',6,7),(27,'B-',2,8),(28,'B+',9,8),(29,'C+',8,9),(30,'A-',7,9),(31,'A+',5,9),(32,'B+',4,9),(33,'A',4,2);
/*!40000 ALTER TABLE `school_db_studentcourse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 17:27:30
