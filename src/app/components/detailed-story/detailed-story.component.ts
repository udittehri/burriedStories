import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detailed-story',
  templateUrl: './detailed-story.component.html',
  styleUrls: ['./detailed-story.component.css']
})
export class DetailedStoryComponent implements OnInit {

  @Input() detailsMessage : string;
  constructor() { }

  ngOnInit() {
  }

} 
