import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../../hero.service';
import { Observable, of } from 'rxjs';
import { Hero } from '../../types/hero';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let getHeroesSpy: jasmine.Spy<() => Observable<Hero[]>>
  let heroesDummy: [{id: 1, name: "dummy"}];

  beforeEach(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(heroesDummy));

    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [ { provide: HeroService, useValue: heroService } ]
    });
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
