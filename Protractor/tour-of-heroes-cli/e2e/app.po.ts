import {browser, by, element, ElementFinder, Key} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  navigateToTopHero() {
    element(by.css('.module.hero')).click();
  }

  navigateToDashboard() {
    element(by.linkText('Dashboard')).click();
  }

  getHeroId() {
    return element(by.css('.heroId')).getText();
  }

  searchHeroInput(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    return element(by.css('.search-result'));
  }

  goToFirstHeroOfList() {
    element(by.css('.badge')).click();
    element(by.css('button.details')).click();
  }

  editHeroName(name: string) {
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(name);
    element(by.buttonText('Save')).click();
  }

  deleteFirstFromList() {
    element(by.css('button.delete')).click();
  }

}
