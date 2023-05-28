import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;
  let heroService: HeroService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
    heroService = new HeroService(httpClientSpy, messageServiceSpy);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });
});
