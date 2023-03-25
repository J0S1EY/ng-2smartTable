import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/assets/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2SmartTable';
  count:any

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.service.count.subscribe((data:any)=>{
      this.count=data

      
    })
    
  }
  

}
