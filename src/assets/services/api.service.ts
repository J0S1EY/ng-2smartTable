import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  count = new BehaviorSubject('')
  userData = new BehaviorSubject([])



  constructor(private api:HttpClient) { }

   //fetch data from url
   getUserdata() {
    return this.api.get('https://reqres.in/api/users?page=2')
  }

    //fetch data to user view page
    viewUser(id: any) {
      return this.api.get('https://reqres.in/api/users?page=2/' + id)
  
    }

}
