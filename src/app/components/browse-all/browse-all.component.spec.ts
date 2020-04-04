import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllComponent } from './browse-all.component';

describe('BrowseAllComponent', () => {
  let component: BrowseAllComponent;
  let fixture: ComponentFixture<BrowseAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
