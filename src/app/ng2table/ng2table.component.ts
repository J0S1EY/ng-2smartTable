import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from 'src/assets/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng2table',
  templateUrl: './ng2table.component.html',
  styleUrls: ['./ng2table.component.css']
})
export class Ng2tableComponent implements OnInit {

  data: any[] = [];


  settings = {
    columns: {
      avatar: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (image: any) => {
          return `<img src="${image}" style="width:32px;height:32px;" />`;
        }
      },
      id: {
        title: 'ID',
      },
      first_name: {
        title: 'First Name',
      },
      last_name: {
        title: 'Last Name',
      },
      email: {
        title: 'Email',
      },
    },
    actions: false,


  };

  source: any;

  constructor(private apiData: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiData.getUserdata().subscribe((users: any) => {
      this.data = users.data; // data from  api
      this.apiData.userData.next(users.data)
      let userCount = this.data.length.toString() // total users count 
      this.source = new LocalDataSource(this.data);  // users data to ng2 smart table
      this.apiData.count.next(userCount) //users count to header using behaviour subject
    });
  }
  // fetch id and navigate to view user
  onRowSelect(event: any) {
    let id = event.data.id;

    setTimeout(() => {
      this.router.navigateByUrl('viewUser/' + id)
    }, 200);


  }

}
