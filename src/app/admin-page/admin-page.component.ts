import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from 'src/assets/services/api.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  

  data: any[] = [];
  source: any;
  userData: any
  



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
    actions: {
      add: true,
      edit: true,
      delete: true,
      position: 'right',
    },
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    delete: {
      confirmDelete: true
    }

  };

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.service.userData.subscribe((data: any) => { // users data from services BehaviorSubject
      this.data = data

    })

    this.source = new LocalDataSource(this.data);  // users data to ng2 smart table

  }

  onCreateConfirm(event: any): void { // new added data in table
    console.log('New data:', event.newData);
    event.confirm.resolve(event.newData);
  }

  onEditConfirm(event: any): void { // updated data in table
    console.log('Edited data:', event.newData);
    event.confirm.resolve(event.newData);
  }

  deletedata(event: any): void { // delete data request in table
    this.userData = event.data
    //console.log('Deleted data:', this.userData);
    event.confirm.resolve(event.data);
  }

  userCancel(){
    this.userData=''
  }

  deleteUser(event:any){
    
    let user =event.data.data.first_name
    this.userData=''
    console.log(user)


  }


}
