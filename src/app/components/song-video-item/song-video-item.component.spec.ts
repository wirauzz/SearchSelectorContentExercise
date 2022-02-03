import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVideoItemComponent } from './song-video-item.component';

describe('SongVideoItemComponent', () => {
  let component: SongVideoItemComponent;
  let fixture: ComponentFixture<SongVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongVideoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
