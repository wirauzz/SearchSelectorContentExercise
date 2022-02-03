import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {
  @Input() song:Song;
  constructor() { }

  ngOnInit(): void {
  }

  convertToMinutes(duration:number){
    let seconds = duration/1000;
    let minutes = seconds/60;
    return Math.floor(minutes);
  }

  convertToSeconds(duration:number){
    let seconds = duration/1000;
    let minutes = seconds%60;
    return Math.floor(minutes);
  }

}
