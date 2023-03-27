import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  data: LocalDataSource;
  settings = {
    columns: {
      avatar: {
        title: 'Image URL',
      },
      id: {
        title: 'ID',
      },
      first_name: {
        title: 'First Name',
      },
      last_name: {
        title: 'First Name',
      },
      email: {
        title: 'Email',
      },
    },
    actions: {
      add: true,
      edit: true,
      delete: false
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
  }

  constructor() {
    this.data = new LocalDataSource([
      {
        id: 1,
        first_name: 'Patricia ',
        last_name: 'Lebsack',
        email: 'Julianne.OConner@kory.org',

      },
      {
        id: 2,
        first_name: 'Chelsey',
        last_name: 'Lebsack',
        email: 'Lucio_Hettinger@annie.ca',

      },
    ]);
  }

  ngOnInit(): void { }

  onCreateConfirm(event: any): void { // new added data in table
    console.log('New data:', event.newData);
    event.confirm.resolve(event.newData);
  }

  onEditConfirm(event: any): void { // updated data in table
    console.log('Edited data:', event.newData);
    event.confirm.resolve(event.newData);
  }

  deletedata(event: any): void { // delete data request in table
    console.log('Deleted data:', event.data.id);
    event.confirm.resolve(event.data);
  }

}
