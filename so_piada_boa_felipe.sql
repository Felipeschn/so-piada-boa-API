CREATE DATABASE  IF NOT EXISTS `so_piada_boa` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `so_piada_boa`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: so_piada_boa
-- ------------------------------------------------------
-- Server version	5.7.35

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
-- Table structure for table `Jokes`
--

DROP TABLE IF EXISTS `Jokes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Jokes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(500) NOT NULL,
  `dt_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `likes` int(11) NOT NULL DEFAULT '0',
  `dislikes` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Jokes`
--

LOCK TABLES `Jokes` WRITE;
/*!40000 ALTER TABLE `Jokes` DISABLE KEYS */;
INSERT INTO `Jokes` VALUES (1,'string','string','string','string','2021-07-27 14:00:23',2,2),(2,'Felipe de Mello','felipe@triider.com','Piadoca','PPiada boa e bem feitaPiada boa e bem feitaPiada boa e bem feita','2021-07-27 14:19:01',2,3),(3,'Felipe de Mello','felipe@triider.com','TITULO QUALQUER','PIADA QUALUQER, PIADA QUALUQER, PIADA QUALUQER, PIADA QUALUQER, PIADA QUALUQER, PIADA QUALUQER, ','2021-07-27 14:31:18',3,3),(4,'João Armless','joao.armless@email.com','Chuck Norris','Chuck Norris can walk on water. With his hands','2021-07-27 18:29:29',6,5),(5,'Tridder teste','triider@triider.com','Titulo da piada','TESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTETESTE TESTE','2021-07-27 18:37:48',1,1),(6,'Tridder teste','triider@triider.com','Piadoca','Piadoca bem bolada, Piadoca , Piadoca bem bolada, Piadoca bem bolada, Piadoca bem bolada, Piadoca bem bolada.','2021-07-27 18:45:41',2,1),(7,'FELIPE','joaoDISJADSA@DHSAUDm.com','TITULO PIADA','QWERWQERQWERQWERWQERWEQRWEQREQW','2021-07-27 18:47:43',0,0);
/*!40000 ALTER TABLE `Jokes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210727135758-create-jokes.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'so_piada_boa'
--

--
-- Dumping routines for database 'so_piada_boa'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-27 16:20:02
