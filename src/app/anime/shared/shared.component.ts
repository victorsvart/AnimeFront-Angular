import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RequestsService } from 'src/app/requests.service';
import { Anime } from 'src/app/model/anime.model';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  myForm: FormGroup;
  
  showValue = false;
  rresponse: any;
  constructor(private fb: FormBuilder, private service: RequestsService, private http: HttpClient){}

  
  ngOnInit(){
    this.myForm = this.fb.group({
      titleJP: [null, Validators.required],
      titleEN: [
        null,
        Validators.required
      ],
      imageLink: [null, Validators.required],
      relaseDate: [null, Validators.required],
      description: [null, Validators.required]
    });

    
    
  
    
    
    
  }
  onSubmit(): void {
    
    var formData: any = new FormData();
    formData.append("titleJP",this.myForm.get("titleJP")?.value)
    formData.append("titleEN", this.myForm.get("titleEN")?.value);

    formData.append("image", this.myForm.get("imageLink")?.value)
    formData.append("relaseDate", "2004-03-09T00:20:54.2")
    formData.append("isFinished", true)
    formData.append("description", this.myForm.get("description")?.value)
   

    
    
    this.http.post<Anime>("https://localhost:7027/AddAnime", formData).subscribe(response => console.log(response));
  }
 

}
