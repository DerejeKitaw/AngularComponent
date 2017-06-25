import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCardComponent } from './words-card.component';

describe('WordsCardComponent', () => {
  let component: WordsCardComponent;
  let fixture: ComponentFixture<WordsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
