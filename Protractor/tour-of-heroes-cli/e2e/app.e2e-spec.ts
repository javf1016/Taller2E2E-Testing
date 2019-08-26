import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should navigate to hero from top', () => {
    page.navigateTo();
    page.navigateToTopHero();
    expect(page.getHeroId()).toBe('11');
  });

  it('should navigate to hero from search', () => {
    page.navigateTo();
    page.searchHeroInput('zero').click();
    expect(page.getHeroId()).toBe('0');
  });

  it('should search for hero', () => {
    page.navigateTo();
    expect(page.searchHeroInput('zero').getText()).toBe('Zero');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should edit a hero', () => {
    page.goToFirstHeroOfList();
    page.editHeroName('newZero');
    page.navigateToDashboard();
    expect(page.searchHeroInput('newZero').getText()).toBe('newZero');
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteFirstFromList();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should navigate to hero from list', () => {
    page.goToFirstHeroOfList();
    expect(page.getHeroId()).toBe('0');
  });

});
