import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { GithubService } from '../app/services/github.service';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from '../app/components/profile.component';



@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  providers: [GithubService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
