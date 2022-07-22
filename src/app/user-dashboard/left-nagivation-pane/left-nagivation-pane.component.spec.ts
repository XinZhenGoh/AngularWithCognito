import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNagivationPaneComponent } from './left-nagivation-pane.component';

describe('LeftNagivationPaneComponent', () => {
  let component: LeftNagivationPaneComponent;
  let fixture: ComponentFixture<LeftNagivationPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNagivationPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNagivationPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
