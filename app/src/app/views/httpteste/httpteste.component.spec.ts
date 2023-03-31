import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptesteComponent } from './httpteste.component';

describe('HttptesteComponent', () => {
  let component: HttptesteComponent;
  let fixture: ComponentFixture<HttptesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttptesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttptesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
