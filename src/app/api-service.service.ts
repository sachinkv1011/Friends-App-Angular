import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getFriends=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")

  }
  addFriends=(dataToSend:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)

  }
}
