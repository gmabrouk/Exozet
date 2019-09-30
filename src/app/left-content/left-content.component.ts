import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.less']
})
export class LeftContentComponent implements OnInit {
  dateTime = new Date("2012-02-20T19:02");
  quote = "„Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz.“ – Trapattoni ’98";
  constructor() { }

  ngOnInit() {
  }

}
