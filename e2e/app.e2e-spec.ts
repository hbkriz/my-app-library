import { MyAppLibraryPage } from './app.po';

describe('my-app-library App', () => {
  let page: MyAppLibraryPage;

  beforeEach(() => {
    page = new MyAppLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
