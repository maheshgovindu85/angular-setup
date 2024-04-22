import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTreeComponent } from './sidebar-tree.component';

describe('SidebarTreeComponent', () => {
  let component: SidebarTreeComponent;
  let fixture: ComponentFixture<SidebarTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
