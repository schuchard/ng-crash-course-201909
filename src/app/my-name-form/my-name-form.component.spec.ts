import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameFormComponent } from './my-name-form.component';

describe('MyNameFormComponent', () => {
  let component: MyNameFormComponent;
  let fixture: ComponentFixture<MyNameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
