import { Component } from '@angular/core';

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


  readValues=()=>
  {
    let data:any={
      
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }

      console.log(data)
          
  

  }
}
