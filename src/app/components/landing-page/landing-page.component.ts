import { Component, OnInit } from '@angular/core';
import { Stories } from './../../FakeDucks/stories';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  displayStories: any;
  detailesToShare : string = "";
  correctEmail = true;
  user : string = "";
  imgsrc = "./../../../assets/pictures/more.svg"
  constructor() {

  }

  ngOnInit() {
    // alert("Under Construction")
    this.displayStories = Stories;
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
  
}
