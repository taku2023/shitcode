package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	. "shitcode/server/database"
	"shitcode/server/storage"
	"strings"
)


type Content struct{
	Title string `json:"title"`
	Summary string `json:"summary"`
	Files []http.File `json:"files"`
	Tags []string `json:"tags"`
}

func Post(w http.ResponseWriter,r *http.Request){
	var content Content
	if err := json.NewDecoder(r.Body).Decode(&content); err !=nil{
		w.Write([]byte(err.Error()))
		w.WriteHeader(http.StatusBadRequest)
		return
	}	
	
	config := NewConfig()
	db :=Connect(&config)
	userID := r.Form.Get("USER_ID")
	//decode files
	var files []string
	for _,file := range content.Files{
		files = append(files, storage.PutFile(file))
	}
	urls := "{"+strings.Join(files,",")+"}"
	db.Exec("insert into posts(user_id,title,summary,files_s3_url) values ($1,$2,$3,$4)",userID,content.Title,content.Summary,urls)
	
}