import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Observable, of } from 'rxjs';
import { HeroService } from '../../hero.service';
import { Hero } from '../../types/hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let getHeroesSpy: jasmine.Spy<() => Observable<Hero[]>>
  let heroesDummy: [{id: 1, name: "dummy"}];

  beforeEach(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(heroesDummy));

    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [ { provide: HeroService, useValue: heroService } ]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
