import { Component, OnInit, Input } from '@angular/core';
import { Vinyl } from '../models';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() allVinyls: Vinyl[];
  
  constructor() { }

  ngOnInit() {
  }

}
