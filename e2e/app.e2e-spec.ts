import { Angularfire2Webpackerrors-solvedPage } from './app.po';

describe('angularfire2-webpack-errors-solved App', function() {
  let page: Angularfire2Webpackerrors-solvedPage;

  beforeEach(() => {
    page = new Angularfire2Webpackerrors-solvedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
