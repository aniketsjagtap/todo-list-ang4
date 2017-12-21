import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './item.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
