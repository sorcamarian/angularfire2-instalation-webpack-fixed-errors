import { Angularfire2WebpackErrorsPage } from './app.po';

describe('angularfire2-webpack-errors App', function() {
  let page: Angularfire2WebpackErrorsPage;

  beforeEach(() => {
    page = new Angularfire2WebpackErrorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
