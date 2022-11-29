import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent {
 
    constructor(private api:ApiServiceService){
      api.getFriends().subscribe(
        (response)=>{
          this.friendList=response;
        }
      )
    }
 


  friendList:any=[]

}
