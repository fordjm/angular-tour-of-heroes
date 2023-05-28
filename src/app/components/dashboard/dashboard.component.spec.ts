import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';
import { HeroService } from '../../hero.service';
import { Hero } from '../../types/hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let getHeroesSpy: jasmine.Spy<() => Observable<Hero[]>>
  let heroesDummy: [{id: 1, name: "dummy"}];


  beforeEach(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(heroesDummy));

    TestBed.configureTestingModule({
      declarations: [DashboardComponent, HeroSearchComponent],
      providers: [ { provide: HeroService, useValue: heroService } ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
