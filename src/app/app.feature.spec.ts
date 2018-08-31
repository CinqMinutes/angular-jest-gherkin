import { defineFeature, loadFeature } from 'jest-cucumber';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

const feature = loadFeature('src/app/app.feature');

defineFeature(feature, test => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));
  let app;

  test('Application must have a title', ({ when, then, pending }) => {
    when('I am on the application', () => {
      const fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

    then(/^I have a title '(.*)'$/, title => {
      expect(app.title).toEqual(title);
    });
  });
});
