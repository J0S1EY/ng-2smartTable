import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SmartTableModule } from 'ng2-smart-table';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2tableComponent } from './ng2table/ng2table.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2tableComponent,
    ViewDetailsComponent,
    AdminPageComponent,
    UserPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpClientModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
