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
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartshop`
--

DROP TABLE IF EXISTS `cartshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cartShop_FK` (`userId`),
  KEY `cartShop_FK_1` (`productId`),
  CONSTRAINT `cartShop_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `cartShop_FK_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartshop`
--

LOCK TABLES `cartshop` WRITE;
/*!40000 ALTER TABLE `cartshop` DISABLE KEYS */;
INSERT INTO `cartshop` VALUES (1,21,10,5),(2,21,8,2),(3,24,10,1),(4,24,8,1),(5,24,16,1),(6,21,16,1),(7,28,21,1);
/*!40000 ALTER TABLE `cartshop` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibility`
--

LOCK TABLES `compatibility` WRITE;
/*!40000 ALTER TABLE `compatibility` DISABLE KEYS */;
INSERT INTO `compatibility` VALUES (1,'PC'),(2,'PlayStation 1'),(3,'PlayStation 2'),(4,'PlayStation 3'),(5,'PlayStation 4'),(6,'PlayStation 5'),(7,'XBOX'),(8,'Nintendo');
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
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibility_product`
--

LOCK TABLES `compatibility_product` WRITE;
/*!40000 ALTER TABLE `compatibility_product` DISABLE KEYS */;
INSERT INTO `compatibility_product` VALUES (8,2,7),(9,3,7),(73,1,8),(74,2,8),(75,3,8),(76,4,8),(77,3,10),(78,2,10),(79,4,10),(83,1,16),(84,7,16),(85,4,16),(86,6,16),(99,2,17),(100,4,17),(101,6,17),(112,2,19),(113,3,19),(114,5,19),(127,1,21),(128,2,21),(129,5,21);
/*!40000 ALTER TABLE `compatibility_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender_user`
--

DROP TABLE IF EXISTS `gender_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gender_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `genderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gender_user_FK` (`genderId`),
  KEY `gender_user_FK_1` (`userId`),
  CONSTRAINT `gender_user_FK` FOREIGN KEY (`genderId`) REFERENCES `genders` (`id`),
  CONSTRAINT `gender_user_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender_user`
--

LOCK TABLES `gender_user` WRITE;
/*!40000 ALTER TABLE `gender_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `gender_user` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'RPG'),(2,'AcciÃ³n'),(3,'Aventura'),(4,'Rol'),(5,'Deporte'),(6,'SimulaciÃ³n'),(7,'Estrategia'),(8,'Supervivencia');
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
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_product`
--

LOCK TABLES `language_product` WRITE;
/*!40000 ALTER TABLE `language_product` DISABLE KEYS */;
INSERT INTO `language_product` VALUES (9,7,1),(10,7,2),(46,8,2),(47,10,2),(48,10,3),(51,16,2),(52,16,3),(61,17,2),(62,17,3),(69,19,2),(70,19,3),(79,21,2),(80,21,3);
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
INSERT INTO `languages` VALUES (1,'EspaÃ±ol'),(2,'Ingles'),(3,'Chino');
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
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multiplayer_product`
--

LOCK TABLES `multiplayer_product` WRITE;
/*!40000 ALTER TABLE `multiplayer_product` DISABLE KEYS */;
INSERT INTO `multiplayer_product` VALUES (8,7,1),(63,8,1),(64,10,2),(65,10,3),(66,10,4),(70,16,4),(71,16,3),(72,16,5),(81,17,3),(82,17,4),(92,19,3),(93,19,4),(94,19,5),(105,21,3),(106,21,4);
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
INSERT INTO `multiplayers` VALUES (1,'1 Player'),(2,'2 Player'),(3,'3 Player'),(4,'4 Player'),(5,'5 o Mas');
/*!40000 ALTER TABLE `multiplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `see` tinyint(4) DEFAULT NULL,
  `message` varchar(300) DEFAULT NULL,
  `link` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notification_FK` (`userId`),
  CONSTRAINT `notification_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (3,27,0,'Bienvenido NICOLAS!','#'),(4,27,0,'psst! un articulo que te gusto, acaba de estar en rebaja al 50%!!, pincha aqui para ver cual es!','/products/detail/17'),(5,27,0,'psst! un articulo que te gusto, acaba de estar en rebaja al 75%!!, pincha aqui para ver cual es!','/products/detail/17'),(6,21,0,'psst! un articulo que te gusto, acaba de estar en rebaja al 10%!!, pincha aqui para ver cual es!','/products/detail/19'),(7,28,0,'Bienvenido NICOLAS!','#'),(8,28,0,'psst! un articulo que te gusto, acaba de estar en rebaja al 15%!!, pincha aqui para ver cual es!','/products/detail/21');
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
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
  `description` varchar(450) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'Resident Evil 1','El juego original transcurre en la noche del 24 de julio de 1998 en las afueras de Raccoon City, con','2022-02-10 00:00:00',0,0,25000,20,20000,0,20,8,3,'2022-03-07 02:11:32','2022-03-07 02:11:32','1646619092843_img_.jpg'),(8,'Resident Evil 2','La trama del juego tiene lugar dos meses despuÃ©s de los sucesos de Resident Evil,14â€‹ en Raccoon City','2022-02-10 00:00:00',0,0,25000,5,23750,0,10,8,2,'2022-03-07 02:11:21','2022-03-07 02:11:21','1646619081897_img_.jpg'),(9,'Croc 2','Establecido varios meses después de Croc: Legend of the Gobbos, los Dantinis traman el regreso de Ba','2022-02-10 00:00:00',0,1,7500,5,7125,0,10,3,1,'2022-02-23 19:22:34','2022-02-10 17:12:09','1644513129478_img_.jpg'),(10,'Pes 2022','eFootball 20221â€‹ (anteriormente llamado eFootball PES 2022)2â€‹ es un videojuego de simulaciÃ³n de fÃºtb','2022-02-10 00:00:00',1,1,35000,10,31500,0,25,5,2,'2022-03-07 03:38:41','2022-03-07 03:38:41','1646618867334_img_.png'),(16,'Age of Empires II','Age of Empires II: The Age of Kings es un videojuego de estrategia en tiempo real para computadoras personales y fue desarrollado por Ensemble Studios, y distribuido por Microsoft Game Studios para los sistemas operativos Windows y Mac OS X, y Konami para PlayStation 2.','2022-03-11 00:00:00',0,0,15000,10,13500,0,15,7,1,'2022-03-12 20:30:02','2022-03-12 20:30:02','1646975923758_img_.jpg'),(17,'Super Mario Bros 3','Super Mario Bros. 3 es el tercer videojuego de plataformas de la franquicia Mario para la consola Nintendo Entertainment System. Salió a la venta el 23 de octubre de 1988 en Japón y el 12 de febrero de 1990 en Estados Unidos.','2022-03-14 00:00:00',1,0,15000,75,3750,0,25,3,1,'2022-03-15 15:14:45','2022-03-15 15:14:45','1647310549287_img_.jpg'),(19,'los sims 2','An incredible¡Por primera vez, los jugadores controlan a sus Sims durante toda su vida! Ahora con Los Sims 2, cualquier elección que se haga tendrá un efecto relevante y dramático en la vida de un Sim. Descubre cómo Los Sims se llenan de vida, y como el juego consta de una jugabilidad totalmente nueva, por no hablar de la impresionante novedad que te dejará boquiabierto: la genética. Los Sims tienen su propio ADN que pasa de generación en generac','2022-03-16 00:00:00',0,1,14000,10,12600,0,18,6,2,'2022-03-16 18:43:29','2022-03-16 18:43:29','1647456131714_img_.jpg'),(21,'GTA vice city','La historia comienza cuando en una reunión en el Marco\'s Bistró de Liberty City en 1986, al líder de la familia criminal Forelli, Sonny, se le ocurre la idea de expandir sus negocios al sur, ya que está viendo cómo los traficantes mexicanos y colombianos, e incluso los refugiados cubanos, se están llevando los beneficios y él también quiere su parte. Uno de sus hombres le advierte que todo es dinero procedente de drogas y que eso le podría traer ','2022-03-16 00:00:00',0,0,15000,15,12750,0,15,2,4,'2022-03-16 21:48:08','2022-03-16 21:48:08','1647461313805_img_.jpg');
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
INSERT INTO `rols` VALUES (1,'admin'),(2,'ROL_USER'),(3,'ROL_USER'),(4,'ROL_USER'),(5,'ROL_USER');
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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtitle_product`
--

LOCK TABLES `subtitle_product` WRITE;
/*!40000 ALTER TABLE `subtitle_product` DISABLE KEYS */;
INSERT INTO `subtitle_product` VALUES (3,7,3),(4,7,2),(17,8,2),(18,8,3),(20,16,3),(29,17,2),(30,17,3),(33,19,2),(38,21,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtitles`
--

LOCK TABLES `subtitles` WRITE;
/*!40000 ALTER TABLE `subtitles` DISABLE KEYS */;
INSERT INTO `subtitles` VALUES (1,'EspaÃ±ol'),(2,'Frances'),(3,'Aleman');
/*!40000 ALTER TABLE `subtitles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_preferences`
--

DROP TABLE IF EXISTS `user_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_preferences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `views` int(11) DEFAULT NULL,
  `likes` tinyint(4) DEFAULT NULL,
  `buy` tinyint(4) DEFAULT NULL,
  `stars` tinyint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_preferences_FK` (`genderId`),
  KEY `user_preferences_FK_1` (`userId`),
  KEY `user_preferences_FK_2` (`productId`),
  CONSTRAINT `user_preferences_FK` FOREIGN KEY (`genderId`) REFERENCES `genders` (`id`),
  CONSTRAINT `user_preferences_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `user_preferences_FK_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_preferences`
--

LOCK TABLES `user_preferences` WRITE;
/*!40000 ALTER TABLE `user_preferences` DISABLE KEYS */;
INSERT INTO `user_preferences` VALUES (2,3,9,9,1,0,0,1),(3,5,9,10,1,0,0,5),(4,8,9,7,1,0,0,NULL),(5,3,23,9,9,1,0,5),(7,5,23,10,9,1,0,1),(8,8,23,7,1,0,0,NULL),(10,3,21,9,145,1,0,4),(11,8,21,7,35,0,0,2),(12,8,21,8,47,1,0,5),(13,5,21,10,28,1,0,2),(14,7,21,16,6,1,0,5),(15,8,23,8,3,1,0,1),(16,5,24,10,1,0,0,NULL),(17,8,24,8,2,1,0,NULL),(18,7,24,16,1,1,0,NULL),(19,7,27,16,2,1,0,NULL),(20,3,27,17,4,1,0,NULL),(21,6,21,19,3,1,0,NULL),(22,5,28,10,3,1,0,1),(23,8,28,7,2,0,0,NULL),(24,7,28,16,8,0,0,NULL),(25,3,28,9,8,0,0,NULL),(26,2,28,21,8,1,0,NULL),(27,8,28,8,5,0,0,NULL);
/*!40000 ALTER TABLE `user_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `age` date DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `locality` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `rol_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_un` (`email`),
  KEY `users_FK` (`rol_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'Dami','Bogarin','asd@gmail.com','$2a$12$lS/y3fR.boqFdKcFoLb4wO.YfEZeW5bQMLgE5i9F1Tij.8HTyGNQC',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-10 20:30:38','2022-02-10 20:30:38',2),(10,'admin','admin','admin@gmail.com','$2a$12$hoVrfVXaOOPPg5Vqcf9N4u37dWw3Kmqk8reEhsdsE4I0kGEMG4E1q',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-11 17:58:42','2022-02-11 17:58:42',1),(11,'aaaaaaaaaaaaaaaa','bbbbbbbbbbbbbbbb','abccccccc@gmail.com','$2a$12$5Emdf0XZSfdsC5ehkBCxwuuLLhSnFmzwv8IlGhAKus0N.fyqUMHPW',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-11 21:29:16','2022-02-11 21:29:16',2),(12,'prueba','prueba','pruebaaac@gmail.com','$2a$12$GV9ZhjyWCE0eJldLQiEP2OiL38ozX.g4a5kKnsPRAY2YW5ZstnH76',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-11 21:38:16','2022-02-11 21:38:16',2),(13,'comision12','nerviosos','comision@gmail.com','$2a$12$rKx.P3L/nMpnzuQ8pGzJXOQFJZMrwWYh0hczRrgw1INj7iSQMnCMW',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-12 00:03:46','2022-02-12 00:03:46',2),(14,'dani','dani','mundogamer@gmail.com','$2a$12$8nM21oXSL2/.soBEWRvnG.OzdteU9cyf42ETr0UkfnmUD9mUKI50q',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-02-17 06:41:30','2022-02-17 06:41:30',1),(15,'hola','hola 2','danidani@gmail.com','$2a$12$TX2lNJaYdoSapPLidXcOFOKfe/ML3wr3vcg9yHzqp6xvpND.zvuQm',NULL,NULL,NULL,NULL,NULL,'1646159650263_img_.png','2022-03-01 18:34:10','2022-03-01 18:34:10',2),(16,'dani','cali','mundo@gmail.com','$2a$12$lrqbzO.TsuV0fbuyyfef2uWPPpQmGhrv5QSm4dstigcOC91iJYwdG',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-03 18:19:34','2022-03-03 18:19:34',2),(17,'karen','cali','karen@gmail.com','$2a$12$W7RSe1EwFRrglvmYgLueF.wGjhzc5Khsx.JbC9r7f2jYmGMlO5fpW',NULL,NULL,NULL,NULL,NULL,'1646536919935_img_.png','2022-03-06 03:22:00','2022-03-06 03:22:00',2),(18,'chingu','chingus','chingu12@gmail.com','$2a$12$LK.rSpkKbXiPEf.ZX5c6geHEn/frlRQF3RgPBl9i2mr3quJxbVm36',NULL,NULL,NULL,NULL,NULL,'1646537210525_img_.jpg','2022-03-06 03:26:51','2022-03-06 03:26:51',2),(19,'lalala','prueba','prueba@gmail.com','$2a$12$bFynBuQUYKd.SxTidl0iDuDcvye/UBw5w4DZLmlULprgLc3DRTLlS',NULL,NULL,NULL,NULL,NULL,'1646537947285_img_.png','2022-03-06 03:39:07','2022-03-06 03:39:07',2),(20,'jdkdkdkd','kskssjsjss','qwer@gmail.com','$2a$12$5PhTX3gF6qG933Lf5Izjg.1IgRnoPp3cIct6OWLl6vv5mF42kXhOK',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-06 03:52:37','2022-03-06 03:52:37',2),(21,'NICOLAS','BOGARIN','1000@gmail.com','$2a$12$c3y9Dtmw4xbFFR1v.UuSB.eWsP3HbsI.JJhgU0M.SdVVBW3mlu7Pq',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-07 01:33:09','2022-03-07 01:33:09',2),(22,'NICOLAS','BOGARIN','administrador@gmail.com','$2a$12$t6ye2UZ61Wn1Q.Jaz.FdiuOjfSjhDeNBAuge/ekQU8Uwxd7FmYqwq',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-07 01:39:30','2022-03-07 01:39:30',1),(23,'asd','asd','222@gmail.com','$2a$12$17znM0XySpgrHACtmuQIU.S7VvZS9z41vABUyOypSeuGdok/QoMR.',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-09 07:02:00','2022-03-09 07:02:00',2),(24,'Rodolgo','Azul','626@gmail.com','$2a$12$TIuQCjUy2d90dy3eeqk21OzY0RHhz279mZmBe5Y3cG0SfvodOl3vG',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-14 03:21:49','2022-03-14 03:21:49',2),(25,'NICOLAS','BOGARIN','noti@gmail.com','$2a$12$kgExrD9AVEJ9uK3dzerGfONTZgI65ph8PHnB/HwYEeh7WcPyr1oyS',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-14 06:10:49','2022-03-14 06:10:49',2),(26,'sdadasd','sdasdasdqw','33@gmail.com','$2a$12$E5vsCpeXj.PBNgsdkG.2ve7r1eH.R1sjgyjm2.F7xEurn/B1rFR8K',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-14 21:44:03','2022-03-14 21:44:03',2),(27,'NICOLAS','BOGARIN','1230@gmail.com','$2a$12$tcEebVLKE.qhwXDBjXnNhud8bNFZRED7FJfoTZ37H/kZ6VkdUVFqG',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-15 01:38:14','2022-03-15 01:38:14',2),(28,'NICOLAS','BOGARIN','nuevacuenta@gmail.com','$2a$12$K4Hjw4X0EGWliGIckUp0EOwNufZM0saWJB3TO2ohBmn8VUXW6Iv/S',NULL,NULL,NULL,NULL,NULL,'default-img.png','2022-03-16 20:00:27','2022-03-16 20:00:27',2);
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

-- Dump completed on 2022-03-17 19:24:19
