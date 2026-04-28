-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: security_project
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_creation` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `salt` varchar(255) NOT NULL,
  `mode` varchar(255) DEFAULT 'user',
  `hashedPasswords` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'AdminRuler','JimmyCricket89','2026-04-17 02:32:11','a3f9c4e1b2d77f0c9e8a1b44d5c2f7a9e0b1c3d4f8a6e2c1d7b9f0a3c4e5b6d7','admin','6533bdcc67f014d986cee34017fbdb97bb7f32924c24985608ce12be4d058f24367316e227116c20b56848bd1c6bd6a7f4e4bdca159b19aa44a99c3fd8d07f60'),(2,'EasyPasswordGuy','password','2026-04-17 02:32:11','9d4f2a7c1b8e0f3d6c5a9b1e4f7c2d8a3e1b0c6d9f4a7e2c5b1d8f0a3c6e9b2','user','89c1bf315e4cff156dcc8cd37a42d6c5d9e5fdc10fed5834669c92d157f22daa16e99e1689d580e5d2e47fa8c4e82ef0780ffb9c85fb2319e15ba04705378706'),(3,'ToughPasswordDude','Glv3 up @lrEadEy','2026-04-17 02:32:11','c1e7a4d9f0b2c6e3a8d1f4b7c9e0a3d5b8c2f1e6a9d4c7b0f3e1a5c8d2b6f9','user','b41cdc8f4ba75c45ec5dd7fa00cffb1eb253a4489795197c6abd437069d98f38a04bfd100fe45bb822f4bcda7ad8efdc44ac12b3c90f2fbb73e1b365c7ea1002'),(4,'LongPasswordLarry','heyguysthisisalongpasswordanditisverylongdude123','2026-04-17 02:32:11','f4c2a9e1d7b3c8f0a5e9d1c4b7f2a6d3e0c9b5a1f8d4c7e2b0a3f6d9c1e5b8','user','66c1e00df879153d4c862b6997581e00d1bb1e4e8f1060ff72e65ed54d155c712689a2e28a52bda949c5feee538151c8892e7e1491fb7acd5af9b3d8ac8b5f35'),(5,'NoPasswordPenelope','','2026-04-17 02:32:11','b7e1c4f9a3d6e0b2c8f4a9d1e3c5b0f7a2d9c6e1b4f8a0c3d5e7b1f2a6c9d4','user','b681a3f6787674eb1594fd4a81cf848309cfe0a420372d9480fd76257acc04d95513267c8737eaafcd6c3bd46b56831d1ed4c22f0f9b75cdae2eae350b282640'),(6,'SpecialPasswordSteve','@#%$@&#^@*#@@^#*@^&()&%','2026-04-17 02:32:11','d9b3e0c7a1f4d2e8b5c0a6f9e3d7b1c4f2a8e0d5c9b3a7f1e4c6d0b8a2f5e9','user','7e299d8f17a9d84863c71448e0e4a45c80a3c58b6a889d2f6b96b19db2ab031beca04847e2950304a45ca1db88a3b57b390cce1c56513abaa0f62121337eaa2e'),(7,'SQLInjectionBait','OR1=1','2026-04-17 02:32:11','e2c9a5f1d4b7e0c3a8f6d1b9c4e7a2d5f0b3c8a1e6d9b4f2c0a7d3e5b1f8c6','user','8140aad28c496a0bf369b6e873bf14a774c65a0eaff52203502e2db42d72ec1969ef5006ae3b1a588371a3eb58483a1a883dc285dde576b6a1982d7a8deb952d');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-26 14:58:49
