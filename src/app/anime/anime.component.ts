import { Component, OnInit, TemplateRef  } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClient } from '@angular/common/http';
import { RequestsService } from '../requests.service';
import { Anime } from '../model/anime.model';
import { Observable, throwError } from 'rxjs';
import { interval, take, finalize } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SharedComponent } from './shared/shared.component';




@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  modalRef?: BsModalRef;
  public AnimeOfPage: any;
  constructor(private modalService: BsModalService, private service: RequestsService, private http: HttpClient){}

  ngOnInit(){
    this.Anime();
    
  }

  openModal() {
    this.modalRef = this.modalService.show(SharedComponent);
  }
  

  public Anime(): void {
  
    this.service.GetAnime()
      .subscribe(response => this.AnimeOfPage = response, error => console.log(error));
     
      

   
   
    
   
    
  }
}
