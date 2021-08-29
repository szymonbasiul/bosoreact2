import { Selector } from 'testcafe';

fixture`Click Test`
    .page`http://localhost:3000/`;

test('My click test', async t => {
    await t.click('.color-mode');
    await t.click('.color-mode');

});
test('Color Test', async t => {
    await t
    .expect(Selector('main').getStyleProperty('background-color')).eql('rgb(0, 0, 0)');
});


