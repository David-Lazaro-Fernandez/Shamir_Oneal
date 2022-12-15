import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFilesComponent } from './register-files.component';

describe('RegisterFilesComponent', () => {
  let component: RegisterFilesComponent;
  let fixture: ComponentFixture<RegisterFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
