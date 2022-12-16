CREATE DATABASE  IF NOT EXISTS `flashcards_project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `flashcards_project`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: flashcards_project
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
-- Table structure for table `cards_app_card`
--

DROP TABLE IF EXISTS `cards_app_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards_app_card` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `word` varchar(255) NOT NULL,
  `definition` varchar(255) NOT NULL,
  `collection_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cards_app_card_collection_id_45893c5c_fk_collectio` (`collection_id`),
  CONSTRAINT `cards_app_card_collection_id_45893c5c_fk_collectio` FOREIGN KEY (`collection_id`) REFERENCES `collections_app_collection` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards_app_card`
--

LOCK TABLES `cards_app_card` WRITE;
/*!40000 ALTER TABLE `cards_app_card` DISABLE KEYS */;
INSERT INTO `cards_app_card` VALUES (1,'What is Flutter?','Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.',1),(2,'What is Dart ?','Dart is a programming language designed for client development, such as for the web and mobile apps.',1),(3,'What is a widget?','Widgets are the central class hierarchy in the Flutter framework. A widget is an immutable description of part of a user interface.',1),(4,'What is CSS?','Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',2),(5,'What is a class?','A CSS class is an attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements with CSS.',2),(6,'Id vs Class','While an ID is specific to a single element, classes can be assigned to multiple elements on a page or throughout the website.',2),(7,'What is Pandas?','Pandas is a software library written for the Python programming language for data manipulation and analysis.',3),(8,'Pandas DataFrame','DataFrame is a 2-dimensional labeled data structure with columns of potentially different types.',3),(9,'Why use \"read_csv\"?','To access data from the CSV file, we require a function read_csv() that retrieves data in the form of the Dataframe.',3),(14,'test','test',3);
/*!40000 ALTER TABLE `cards_app_card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 17:27:32
