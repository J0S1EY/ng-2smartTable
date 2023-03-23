import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/assets/services/api.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id:any
  userData: any[] = [];
  data:any

  constructor(private api: ApiService, private router: Router, private url: ActivatedRoute) { }

  ngOnInit(): void {
    this.url.params.subscribe((urlId)=>{
      console.log(urlId['id'])
      this.id=urlId['id']
    })

    this.api.viewUser(this.id).subscribe((result:any)=>{
      this.userData=result.data

     this.data= this.userData.filter(user=>user.id==this.id)
      console.log(this.data)
      
    })
    
  }



}
