import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../../hero.service';
import { Observable, of } from 'rxjs';
import { Hero } from '../../types/hero';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let getHeroSpy: jasmine.Spy<(id: number) => Observable<Hero>>
  let heroDummy: {id: 1, name: "dummy"};

  beforeEach(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHero']);
    getHeroSpy = heroService.getHero.and.returnValue(of(heroDummy));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeroDetailComponent],
      providers: [ { provide: HeroService, useValue: heroService } ],
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
