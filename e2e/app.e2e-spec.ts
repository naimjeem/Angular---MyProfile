import { MyProfilePage } from './app.po';

describe('my-profile App', () => {
  let page: MyProfilePage;

  beforeEach(() => {
    page = new MyProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
