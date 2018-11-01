import { Component, OnInit } from '@angular/core';
import {Stories} from './../../FakeDucks/stories'
import {HttpClient} from '@angular/common/http';
import { MyDBsService } from './../../FakeDucks/data/my-dbs.service'

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
  data: string;
  private http:HttpClient;

  constructor(
    private serve : MyDBsService
  ) { }

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
    this.data ="helllo";
    debugger
    this.serve.createDb("iGotData",this.data);
    debugger

  }

}
