import { Component, OnInit } from '@angular/core';
import { ItunesService } from 'src/app/services/itunes.service';
import { Song } from 'src/app/models/song';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  songs:Song[];
  songNameControl = new FormControl('')
  searchCriteria = new FormControl('')

  currentPage:number;
  pageSize:number;

  constructor(private itunesService:ItunesService) { }

  ngOnInit(): void {
  }

  searchSong(){    
    this.itunesService.searchSong(this.songNameControl.value, this.searchCriteria.value).subscribe(songs =>{
      this.songs = songs["results"]
      this.currentPage = 1;
      this.pageSize = 10;
    })
  }

  numberOfPages() {
    return Math.ceil(this.songs.length / this.pageSize);
  }

  orderSong(option: boolean){
    if(option== true)
    {
      this.songs.sort((a,b) => a.trackName.localeCompare(b.trackName));
    }
    else if(option== false)
    {
      this.songs.sort((b,a) => a.trackName.localeCompare(b.trackName));
    }
  }
}
