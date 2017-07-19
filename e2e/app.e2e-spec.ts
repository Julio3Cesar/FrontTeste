import { LojaNegociacaoPage } from './app.po';

describe('loja-negociacao App', () => {
  let page: LojaNegociacaoPage;

  beforeEach(() => {
    page = new LojaNegociacaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
