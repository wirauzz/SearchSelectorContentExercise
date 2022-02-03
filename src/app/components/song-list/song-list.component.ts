import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs:Song[];
  songNameControl = new FormControl('')
  searchCriteria = new FormControl('')

  currentPage:number;
  pageSize:number;

  constructor(private songService:SongService) { }

  ngOnInit(): void {
  }

  searchSong(){    
    this.songService.searchSong(this.songNameControl.value, this.searchCriteria.value).subscribe(songs =>{
      this.songs = songs["results"]
      this.currentPage = 1;
      this.pageSize = 10;
    })
  }

  numberOfPages() {
    return Math.ceil(this.songs.length / this.pageSize);
  }

}