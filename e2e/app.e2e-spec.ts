import { DatatablePage } from './app.po';

describe('datatable App', () => {
  let page: DatatablePage;

  beforeEach(() => {
    page = new DatatablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
