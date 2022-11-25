import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendsComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
