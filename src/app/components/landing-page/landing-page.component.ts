import { Component, OnInit } from '@angular/core';
// import * from './../../FakeDucks/data-related.service';
import { MyDBsService } from './../../FakeDucks/data/my-dbs.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  displayStories: any;
  detailesToShare : string = "";
  correctEmail = true;
  dataaaaaa : any;
  user : string = "";
  imgsrc = "./../../../assets/pictures/more.svg"
  database = firebase.database();
  private http:HttpClient
  constructor(private serve : MyDBsService,
    ) {

  }

  ngOnInit() {
    this.displayStories = this.getStories()
    console.log(this.displayStories);
    
  }
  showDetails(selectedId, selectedDetail,imageId)
  { 
    this.detailesToShare = selectedDetail;
    (document.getElementById(selectedId).style.display == "block") ?
     document.getElementById(selectedId).style.display = "none"   :
     document.getElementById(selectedId).style.display = "block";
  }
  gotoOld() {
    alert("Not Available")
  }
  getStories()
  {
    // this.displayStories =  this.http.get('./../../../assets/data.json')
    return this.serve.createDb("getStories",null).stories;
    // this.displayStories = this.serve.createDb()
    // this.displayStories = this.displayStories.stories
    // console.log(this.displayStories);
    
  }
}
