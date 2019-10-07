import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Vinyl } from '../models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('f',{static:false}) form: NgForm;
  @Output() onAddNewVinyl: EventEmitter<Vinyl> = new EventEmitter<Vinyl>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const newVinyl: Vinyl = {
      albumName: this.form.value['albumName'],
      artist: this.form.value['artist'],
      rating: this.form.value['rating'] || 5,
      coverImageUrl: this.form.value['imageUrl'] || '/assets/vinyl.jpg' 
    }

    this.onAddNewVinyl.emit(newVinyl);
    this.form.resetForm;
  }

}
