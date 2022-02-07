-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: mundo_gamer
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `orderId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_FK` (`orderId`),
  KEY `cart_FK_1` (`userId`),
  CONSTRAINT `cart_FK` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `cart_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classifications`
--

DROP TABLE IF EXISTS `classifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameClassification` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classifications`
--

LOCK TABLES `classifications` WRITE;
/*!40000 ALTER TABLE `classifications` DISABLE KEYS */;
INSERT INTO `classifications` VALUES (1,'A'),(2,'B'),(3,'B15'),(4,'C'),(5,'A');
/*!40000 ALTER TABLE `classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compatibility`
--

DROP TABLE IF EXISTS `compatibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compatibility` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nameCompatibility` varchar(50) NOT NULL,
  UNIQUE KEY `compatibility_un` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibility`
--

LOCK TABLES `compatibility` WRITE;
/*!40000 ALTER TABLE `compatibility` DISABLE KEYS */;
/*!40000 ALTER TABLE `compatibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compatibility_product`
--

DROP TABLE IF EXISTS `compatibility_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compatibility_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `compatibilityId` int(10) unsigned NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `compatibility_product_FK` (`productId`),
  KEY `compatibility_product_FK_1` (`compatibilityId`),
  CONSTRAINT `compatibility_product_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `compatibility_product_FK_1` FOREIGN KEY (`compatibilityId`) REFERENCES `compatibility` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibility_product`
--

LOCK TABLES `compatibility_product` WRITE;
/*!40000 ALTER TABLE `compatibility_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `compatibility_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameGender` varchar(60) DEFAULT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'RPG',0),(2,'Acción',0),(3,'Aventura',0),(4,'Rol',0),(5,'Deporte',0);
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language_product`
--

DROP TABLE IF EXISTS `language_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `languageId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `language_product_FK` (`productId`),
  KEY `language_product_FK_1` (`languageId`),
  CONSTRAINT `language_product_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `language_product_FK_1` FOREIGN KEY (`languageId`) REFERENCES `languages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_product`
--

LOCK TABLES `language_product` WRITE;
/*!40000 ALTER TABLE `language_product` DISABLE KEYS */;
INSERT INTO `language_product` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `language_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameLanguage` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'Español'),(2,'Ingles'),(3,'Chino'),(4,'Chino'),(5,'Chino');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `likeBoolean` tinyint(4) DEFAULT NULL,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `like_FK` (`productId`),
  KEY `like_FK_1` (`userId`),
  CONSTRAINT `like_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `like_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,1,1,1),(2,1,2,2),(3,0,3,3),(4,0,4,4),(5,1,5,5);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiplayer_product`
--

DROP TABLE IF EXISTS `multiplayer_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiplayer_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `multiplayerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `multiplayer_product_FK` (`productId`),
  KEY `multiplayer_product_FK_1` (`multiplayerId`),
  CONSTRAINT `multiplayer_product_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `multiplayer_product_FK_1` FOREIGN KEY (`multiplayerId`) REFERENCES `multiplayers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiplayer_product`
--

LOCK TABLES `multiplayer_product` WRITE;
/*!40000 ALTER TABLE `multiplayer_product` DISABLE KEYS */;
INSERT INTO `multiplayer_product` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `multiplayer_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multiplayers`
--

DROP TABLE IF EXISTS `multiplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multiplayers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiplayers`
--

LOCK TABLES `multiplayers` WRITE;
/*!40000 ALTER TABLE `multiplayers` DISABLE KEYS */;
INSERT INTO `multiplayers` VALUES (1,'true'),(2,'true'),(3,'false'),(4,'true'),(5,'true');
/*!40000 ALTER TABLE `multiplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_product_FK` (`productId`),
  KEY `order_product_FK_1` (`orderId`),
  CONSTRAINT `order_product_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `order_product_FK_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` varchar(100) DEFAULT NULL,
  `totalPrice` decimal(10,0) NOT NULL,
  `date` datetime NOT NULL,
  `totalDescount` decimal(10,0) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `orderProduct` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2',8900,'2013-06-14 00:00:00',8000,1,1),(2,'3',12100,'2013-06-14 00:00:00',2000,2,2),(3,'1',12100,'2018-06-14 13:15:00',3000,3,3),(4,'2',6100,'2020-06-06 14:15:00',500,4,4),(5,'1',4500,'2022-01-06 19:15:00',400,5,5);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `conexion` tinyint(1) DEFAULT NULL,
  `integratedShop` tinyint(4) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `descount` int(11) DEFAULT NULL,
  `priceEnd` int(11) DEFAULT NULL,
  `sold` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `genderId` int(11) NOT NULL,
  `classificationId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `photo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`genderId`),
  KEY `products_FK_1` (`classificationId`),
  CONSTRAINT `products_FK` FOREIGN KEY (`genderId`) REFERENCES `genders` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`classificationId`) REFERENCES `classifications` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Resident Evil','Juego-Game-PlayStation','2011-01-01 00:00:00',1,1,5,5,5,3,2,1,1,'2022-02-04 01:25:17',NULL,''),(2,'Resident Evil 2','Resident Evil-PlayStations','2000-05-21 00:00:00',1,1,5540,15,5000,3,2,2,2,'2022-02-04 01:25:17',NULL,''),(3,'Croc 2','Croc 2 PlayStation','2000-05-05 00:20:30',0,1,3650,10,3200,2,1,3,3,'2022-02-04 01:25:17',NULL,''),(4,'Jurassic World','Jurassic World Lego PS4','2011-04-05 20:20:30',1,2,4500,20,4100,1,4,4,4,'2022-02-04 01:25:17',NULL,''),(5,'GHOST','GHOST of Tsushima','2015-11-05 14:30:30',2,2,8560,15,7900,2,6,5,5,'2022-02-04 01:25:17',NULL,'');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rols` (
  `id` int(10) unsigned NOT NULL,
  `nameRol` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'ROL_USER'),(2,'ROL_USER'),(3,'ROL_USER'),(4,'ROL_USER'),(5,'ROL_USER');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starts`
--

DROP TABLE IF EXISTS `starts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `starts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `value` tinyint(5) unsigned DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `starts_FK` (`productId`),
  KEY `starts_FK_1` (`userId`),
  CONSTRAINT `starts_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `starts_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starts`
--

LOCK TABLES `starts` WRITE;
/*!40000 ALTER TABLE `starts` DISABLE KEYS */;
INSERT INTO `starts` VALUES (1,3,1,1),(2,1,2,2),(3,5,3,3),(4,4,4,4),(5,1,5,5);
/*!40000 ALTER TABLE `starts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtitle_product`
--

DROP TABLE IF EXISTS `subtitle_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtitle_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `subtitleId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subtitle_product_FK` (`subtitleId`),
  KEY `subtitle_product_FK_1` (`productId`),
  CONSTRAINT `subtitle_product_FK` FOREIGN KEY (`subtitleId`) REFERENCES `subtitles` (`id`),
  CONSTRAINT `subtitle_product_FK_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtitle_product`
--

LOCK TABLES `subtitle_product` WRITE;
/*!40000 ALTER TABLE `subtitle_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `subtitle_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtitles`
--

DROP TABLE IF EXISTS `subtitles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtitles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nameLanguage` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtitles`
--

LOCK TABLES `subtitles` WRITE;
/*!40000 ALTER TABLE `subtitles` DISABLE KEYS */;
/*!40000 ALTER TABLE `subtitles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `age` varchar(2) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `rol_id` int(10) unsigned NOT NULL DEFAULT 0,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_un` (`email`),
  KEY `users_FK` (`rol_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Daniela','Cali','dani@gmail.com','123','Calle falsa','Confluencia','4480249','20','2022-01-23 06:00:00','2022-02-01 06:00:00',1,''),(2,'Thomas','Edison','tom@gmail.com','321','Calle verdadera','Zapala','4412356','22','2022-01-01 06:00:00','2022-01-02 06:00:00',1,''),(3,'Galy','Lee','g@gmail.com','456','Belgrano','Plottier','4412356','24','2022-01-02 06:00:00','2022-01-31 06:00:00',1,''),(4,'Newt','Lee','ne@gmail.com','654','Avenida 123','Senillosa','4445454','24','2022-01-03 06:00:00','2022-01-30 06:00:00',1,''),(5,'Ana','Paez','ani@gmail.com','789','Avenida argentina 123','Catriel','44020474','25','2022-01-04 06:00:00','2022-01-28 06:00:00',1,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mundo_gamer'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-07 12:54:46
