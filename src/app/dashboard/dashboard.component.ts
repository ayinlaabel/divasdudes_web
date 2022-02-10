import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu:boolean = false;
  constructor() { }
  
  ngOnInit(): void {

  }

  toggleSideBar(){
    if(this.menu === false){
      document.querySelector('.jw-body')?.classList.add('show');
      document.querySelector('.jw-nav_top')?.classList.add('show');

      this.menu = true;
    }else{
      document.querySelector('.jw-body')?.classList.remove('show');
      document.querySelector('.jw-nav_top')?.classList.remove('show');

      this.menu = false;
    }
  }

  openMenu(){
    document.querySelector('.open')?.classList.add('disable')
    document.querySelector('.close')?.classList.remove('disable')
    document.querySelector('.menu-overlay')?.classList.add('show')
    document.querySelector('.menu')?.classList.add('show')
  }

  closeMenu(){
    document.querySelector('.open')?.classList.remove('disable')
    document.querySelector('.close')?.classList.add('disable')
    document.querySelector('.menu-overlay')?.classList.remove('show')
    document.querySelector('.menu')?.classList.remove('show')
  }

  logout(){

  }

}
