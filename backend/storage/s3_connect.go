package storage

import (
	"context"
	"log"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go/aws"
)

const (
	bucket string = "shitcode" 
)

func client() *s3.Client{
	cfg, err := config.LoadDefaultConfig(context.TODO(),config.WithSharedConfigProfile("tmori"))
	if err !=nil{
		log.Fatal(err)
	}
	client := s3.NewFromConfig(cfg)
	return client
}

func PutFile(file http.File)  string {
	client :=client()
	info,err := file.Stat()
	if err !=nil{
		log.Fatal(err)
	}
	
	//var output *s3.PutObjectOutput
	if _,err =client.PutObject(context.TODO(),&s3.PutObjectInput{
		Bucket: aws.String(bucket),
		Key: aws.String(info.Name()),
		Body: file,
	});err !=nil{
		log.Fatal(err)
	}
	return info.Name()
}

func DownloadURL(filename string)string{
	url := "https://"+bucket+".s3.ap-northeast-1.amazonaws.com"+filename
	return url
}

func DownloadFile(userId string,filename string) (err error){
	client := client()
	output,err :=client.GetObject(context.TODO(),&s3.GetObjectInput{
		Bucket: aws.String(bucket),
		Key: aws.String(filename),
		
	})
	body :=output.Body
	
	defer func(){
		err = body.Close()
	}()
	return nil
}