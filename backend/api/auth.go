package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	cognito "github.com/aws/aws-sdk-go/service/cognitoidentityprovider"
)

type Credential struct{
	Email string `json:"email"`
	Password string `json:"password"`
}

type User struct{
	UserID string `json:"user_id"`
}

func SignUp(w http.ResponseWriter,r *http.Request){
	var cred Credential
	if err := json.NewDecoder(r.Body).Decode(&cred); err !=nil{
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	sess :=session.Must(session.NewSessionWithOptions(session.Options{
		Config: aws.Config{Region: aws.String("ap-northeast-1")},
		Profile: "tmori", //TODO: 
	}))
	//access cognito with credential
	provider := cognito.New(sess)
	userPoolId := "ap-northeast-1_GgRQkaWiK"
	output, err :=provider.AdminCreateUser(&cognito.AdminCreateUserInput{
		UserAttributes: []*cognito.AttributeType{
			{
				Name: aws.String("email"),
				Value: &cred.Email,
			},
			{
				Name: aws.String("password"),
				Value: &cred.Password,
			},
		},	
			
		DesiredDeliveryMediums: []*string{
			aws.String("EMAIL"),
		},
		Username: &cred.Email,
		UserPoolId: aws.String(userPoolId),
	})
	if err !=nil{
		w.WriteHeader(http.StatusBadRequest)
		fmt.Println(err.Error())
		return 
	}
	fmt.Println(output) 
	w.WriteHeader(http.StatusOK)
}

func Register(w http.ResponseWriter,r *http.Request){
	w.WriteHeader(http.StatusOK)
}

func Login(w http.ResponseWriter,r *http.Request){
	var cred Credential
	if err := json.NewDecoder(r.Body).Decode(&cred); err !=nil{
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func GetUser(user *User) error {
	user.UserID = "moritaku"
	return nil
}