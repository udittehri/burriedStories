import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loginPage : boolean = false ;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  checkUrl ()
  {
    console.log(this.router);
    
    if(this.router.url === '/login')
    {
      alert("pppp")
      this.loginPage = true ;
      console.log(this.loginPage);
      
    }
  }
}
