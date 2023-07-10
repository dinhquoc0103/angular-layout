import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingMovieComponent } from './creating-movie.component';

describe('CreatingMovieComponent', () => {
  let component: CreatingMovieComponent;
  let fixture: ComponentFixture<CreatingMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
