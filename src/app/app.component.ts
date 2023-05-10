import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'LuisCJ';
  public firstName:string = 'Lucho';
  public email:string = 'lucho@webmail.com';

  constructor(){
    console.log("1) Hello I am in the constructor");
  }

  ngOnInit(){
    console.log("2) Hello I'm initialazing the component");
  }

  ngAfterViewInit(){
      console.log("3) Hello I am in afterviewinit");
  }

  ngOnDestroy(){
    console.log("4) Hello the component is being destroyed");

  }

  saySomething(){
    alert('Button Pressed');
  }
}
