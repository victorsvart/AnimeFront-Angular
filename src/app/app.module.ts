import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Anime } from './model/anime.model';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from './requests.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './anime/shared/shared.component';
import {ModalModule} from 'ngx-bootstrap/modal'





@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    SharedComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    TabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent],
  entryComponents: [SharedComponent]
})
export class AppModule { }
