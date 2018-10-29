import { Component, OnInit } from '@angular/core';
import stories from './../../FakeDucks/stories'
import {HttpClient} from '@angular/common/http';
import 'rxjs';
// import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-add-my-story',
  templateUrl: './add-my-story.component.html',
  styleUrls: ['./add-my-story.component.css']
})
export class AddMyStoryComponent implements OnInit {
  public title : string = null;
  public story : string = null;
  jsondata : any;
  private http:HttpClient;

  constructor() { }

  ngOnInit() {
    this.jsondata =  this.getdata()
    console.log(this.jsondata);
  }
  getdata()
  {
    return this.http.get('./../../FakeDucks/AddedData.json')
    // .map(res => res.json())

  }
  createLoginRequest()
  {
    console.log("Hello" ,this.title,this.story);
  }

}
