import { Selector } from "testcafe";

const buttonNumber2 = Selector(".common-button").withExactText("2");
const plusButton = Selector(".common-button").withExactText("+");
const equalsButton = Selector(".common-button").withExactText("=");
const result = Selector(".input-field");
const ceButton = Selector(".common-button").withExactText("CE");
const undoButton = Selector(".common-button").withExactText("C");


fixture`Calculator`.page`http://localhost:3000/calculator`;

// test ma kliknac w button 2 nastepnie ma sie wyswietlic w inpucie 2
// globalne zmienne

// testujemy proste operacje
test("Math Operations", async (t) => {
	await t
		.click(buttonNumber2)
		.click(plusButton)
		.click(buttonNumber2)
		.click(equalsButton);
	await t.expect(result.innerText).eql("4");
});

// testujemy czyszczenie inputa
test("CE Clear Opeartion", async (t) => {
	await t.click(ceButton);
	await t.expect(Selector(".input-field").innerText).eql("");
});

//testujemy usuwanie ostatniego wpisanego numbera
test("C Undo FirstNumber", async (t) => {
    await t
        .click(buttonNumber2)
        .click(buttonNumber2)
        .click(undoButton)
    await t.expect(result.innerText).eql('2')
});

test('C Undo SecondNumber', async (t) => {
    await t
        .click(buttonNumber2)
        .click(plusButton)
        .click(buttonNumber2)
        .click(buttonNumber2)
        .click(undoButton)
    await t.expect(result.innerText).eql('2')
});

test('Do Multiple Operation', async t => {
    await
})



