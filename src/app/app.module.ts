import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './item.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    path : '',
    component : AppComponent
  },
  {
    path : 'items',
    component : ItemsComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
