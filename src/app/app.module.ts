import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewFriendsComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendsComponent,
    SearchFriendComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
