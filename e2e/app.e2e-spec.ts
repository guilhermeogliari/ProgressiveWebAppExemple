import { ProgressiveWebAppExemplePage } from './app.po';

describe('progressive-web-app-exemple App', function() {
  let page: ProgressiveWebAppExemplePage;

  beforeEach(() => {
    page = new ProgressiveWebAppExemplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
