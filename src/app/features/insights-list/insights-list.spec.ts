import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsightsList } from './insights-list';

describe('InsightsList', () => {
  let component: InsightsList;
  let fixture: ComponentFixture<InsightsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsList],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
