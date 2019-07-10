import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){}

  title: string;
  
  ngOnInit(){
    this.title = 'Hello Peeps, this is my-first-angular-app';
  }

}
