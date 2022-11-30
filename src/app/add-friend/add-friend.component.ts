import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendNickName=""
  friendName=""
  DescribeYourFriend=""

constructor(private api:ApiServiceService){}

  readValues=()=>
  {
    let data:any={
      
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }

      console.log(data)

      this.api.addFriends(data).subscribe(
        (response:any)=>{
          console.log(response)

          if (response.status=="success") {
            alert("Friend added successfully")
            this.name=""
            this.friendName=""
            this.friendNickName=""
            this.DescribeYourFriend=""
            
          } else {
            alert("something went wrong")
            
          }
        }
      )
          
  

  }
}
