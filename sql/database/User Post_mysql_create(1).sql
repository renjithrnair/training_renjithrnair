CREATE TABLE `User` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`User_name` varchar(20) NOT NULL,
	`Password` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Post` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`title` varchar(20) NOT NULL,
	`content` longtext NOT NULL,
	`user` bigint NOT NULL,
	`created_date` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Comment` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`content` longtext NOT NULL,
	`user` bigint NOT NULL,
	`post` bigint NOT NULL,
	`created_date` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Image` (
	`user` bigint NOT NULL,
	`post` bigint NOT NULL,
	`url` varchar(800) NOT NULL
);

CREATE TABLE `Like` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`user` bigint NOT NULL,
	`post` bigint NOT NULL,
	`like_date` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Post` ADD CONSTRAINT `Post_fk0` FOREIGN KEY (`user`) REFERENCES `User`(`id`);

ALTER TABLE `Comment` ADD CONSTRAINT `Comment_fk0` FOREIGN KEY (`user`) REFERENCES `User`(`id`);

ALTER TABLE `Comment` ADD CONSTRAINT `Comment_fk1` FOREIGN KEY (`post`) REFERENCES `Post`(`id`);

ALTER TABLE `Image` ADD CONSTRAINT `Image_fk0` FOREIGN KEY (`user`) REFERENCES `User`(`id`);

ALTER TABLE `Image` ADD CONSTRAINT `Image_fk1` FOREIGN KEY (`post`) REFERENCES `Post`(`id`);

ALTER TABLE `Like` ADD CONSTRAINT `Like_fk0` FOREIGN KEY (`user`) REFERENCES `User`(`id`);

ALTER TABLE `Like` ADD CONSTRAINT `Like_fk1` FOREIGN KEY (`post`) REFERENCES `Post`(`id`);

