import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBlogViewComponent } from './dev-blog-view.component';

describe('DevBlogViewComponent', () => {
  let component: DevBlogViewComponent;
  let fixture: ComponentFixture<DevBlogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevBlogViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
