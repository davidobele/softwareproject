-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`UserInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserInfo` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `idUser_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Asset`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Asset` (
  `UserInfo_idUser` INT NOT NULL,
  `Cash` DOUBLE NOT NULL DEFAULT 0,
  `Stocks` DOUBLE NOT NULL DEFAULT 0,
  `Investments` DOUBLE NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserInfo_idUser`),
  CONSTRAINT `fk_Asset_UserInfo`
    FOREIGN KEY (`UserInfo_idUser`)
    REFERENCES `mydb`.`UserInfo` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Spending`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Spending` (
  `UserInfo_idUser` INT NOT NULL,
  `SpendingID` INT NOT NULL AUTO_INCREMENT,
  `Item` VARCHAR(45) NOT NULL DEFAULT 'Item',
  `When` DATE NULL,
  `Amount` DOUBLE NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserInfo_idUser`),
  UNIQUE INDEX `SpendingID_UNIQUE` (`SpendingID` ASC) VISIBLE,
  CONSTRAINT `fk_Spending_UserInfo1`
    FOREIGN KEY (`UserInfo_idUser`)
    REFERENCES `mydb`.`UserInfo` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Saving`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Saving` (
  `UserInfo_idUser` INT NOT NULL,
  `SavingID` INT NOT NULL AUTO_INCREMENT,
  `Item` VARCHAR(45) NOT NULL DEFAULT 'Item',
  `Cost` DOUBLE NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserInfo_idUser`),
  UNIQUE INDEX `SavingID_UNIQUE` (`SavingID` ASC) VISIBLE,
  CONSTRAINT `fk_Saving_UserInfo1`
    FOREIGN KEY (`UserInfo_idUser`)
    REFERENCES `mydb`.`UserInfo` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Investments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Investments` (
  `UserInfo_idUser` INT NOT NULL,
  `InvestId` INT NOT NULL AUTO_INCREMENT,
  `Stock` VARCHAR(45) NOT NULL DEFAULT 'stck',
  `Quantity` DOUBLE NOT NULL DEFAULT 0,
  `Price` DOUBLE NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserInfo_idUser`),
  UNIQUE INDEX `InvestId_UNIQUE` (`InvestId` ASC) VISIBLE,
  CONSTRAINT `fk_Investments_UserInfo1`
    FOREIGN KEY (`UserInfo_idUser`)
    REFERENCES `mydb`.`UserInfo` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
