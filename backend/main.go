package main

import (
	"net/http"
	"shitcode/server/api"

	"github.com/gorilla/mux"
)

type Handle func(w http.ResponseWriter, r *http.Request) 

type AuthHandler struct{
	next Handle
}

func (h *AuthHandler) ServeHTTP(w http.ResponseWriter,r *http.Request){
	var user api.User;
	if err := api.GetUser(&user); err!=nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	r.Form.Set("USER_ID",user.UserID)
	h.next(w,r)
}

func MustAuth(handle Handle) http.Handler{
	return &AuthHandler{next:handle}
}

func main(){
	r := mux.NewRouter()	
	r.HandleFunc("/auth/login",api.Login).Methods("POST")
	r.HandleFunc("/auth/signup",api.Register).Methods("POST")
	r.Handle("/posts",MustAuth(api.Post)).Methods("POST")
	http.ListenAndServe(":8080",r)
}