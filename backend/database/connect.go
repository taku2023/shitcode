package database

import (
	"database/sql"
	"fmt"
	"log"
)

var pool *sql.DB

type Config struct{
	Host string
	Port string
	User string
	Password string
	DBName string
}

func (config *Config) dns() string{
	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s",config.Host,config.Port,config.User,config.Password,config.DBName)
} 

func NewConfig() Config{
	return Config{
		Host: "",
		Port: "5432",
		User: "postgre",
		Password: "postgre",
		DBName: "postgres",
	}
}

func Connect(config *Config) *sql.DB {
	if pool !=nil{
		return pool
	}
	var err error
	dns := config.dns()
	if pool, err = sql.Open("postgre",dns); err !=nil{
		log.Fatal("unable to use data source name", err)
	}
	return pool
}

