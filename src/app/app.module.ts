import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstprojectComponent } from './MyComponent/firstproject/firstproject.component';
import { FirstprojectItemComponent } from './MyComponents/firstproject-item/firstproject-item.component';
import { AddFirstprojectComponent } from './MyComponents/add-firstproject/add-firstproject.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './MyComponents/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstprojectComponent,
    FirstprojectItemComponent,
    AddFirstprojectComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
