import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiDirectComponent } from './wifi-direct.component';

describe('WifiDirectComponent', () => {
  let component: WifiDirectComponent;
  let fixture: ComponentFixture<WifiDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
