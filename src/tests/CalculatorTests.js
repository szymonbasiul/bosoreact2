import { Selector } from 'testcafe';

fixture`Calculator`
    .page `http://localhost:3000/calculator`;


    // test ma kliknac w button 2 nastepnie ma sie wyswietlic w inpucie 2


test('Math Operations', async t => {
    const buttonNumber2 = Selector('.common-button').withText('2');
    const plusButton = Selector('.common-button').withText('+');
    const equalsButton = Selector('.common-button').withText('=');
    const result = Selector('.input-field')
    
    await t
        .click(buttonNumber2)
        .click(plusButton)
        .click(buttonNumber2)
        .click(equalsButton)
    await t.expect((result).innerText).eql('4');
    
});

test('CE Clear Opeartion', async t => {
    const ceButton = Selector('.common-button').withText('CE');

    await t
        .click(ceButton)
    await t.expect(Selector('.input-field').innerText).eql("");

});

test()