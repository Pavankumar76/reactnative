/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  //beforeEach(async () => {
  //await device.reloadReactNative();
  //});
  it('Should have hello there', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });
  const typedText = 'Hello Developer';
  it('Should type hello Developer', async () => {
    const input = element(by.id('input'));
    await input.typeText(typedText);
  });
  it('Should press on submit button', async () => {
    await element(by.id('button')).tap();
  });
  it('Should alert with typed text', async () => {
    await expect(element(by.text(typedText)).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
