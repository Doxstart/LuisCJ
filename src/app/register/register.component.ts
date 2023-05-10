import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit, OnInit, OnDestroy{
  title = 'LuisCJ';
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
}
