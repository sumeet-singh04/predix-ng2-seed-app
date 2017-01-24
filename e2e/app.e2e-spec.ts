import { PredixNg2SeedAppPage } from './app.po';

describe('predix-ng2-seed-app App', function() {
  let page: PredixNg2SeedAppPage;

  beforeEach(() => {
    page = new PredixNg2SeedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
