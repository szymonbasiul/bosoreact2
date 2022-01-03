import { Selector } from "testcafe";
const gameStarter = Selector(".gameStarterButton");
const rpsActionButton = Selector(".rpsActionButton");
const rpsCpuActionButton = Selector(".cpuAction");
fixture`RPS`.page`http://localhost:3000/rps`;

// border gets red on hoover

test("Make Border Red On Hover", async (t) => {
	await t.click(gameStarter).hover(rpsActionButton);
	await t
		.expect(
			rpsActionButton.getStyleProperty(
				"border-top-color",
				"border-bottom-color",
				"border-left-color",
				"border-right-color"
			)
		)
		.eql("rgb(255, 0, 0)");
});

// RPS on click will stay as a chosen one

test("Check if clicked RPS button stays with red border", async (t) => {
	await t.click(gameStarter).click(rpsActionButton);
	await t.hover(rpsCpuActionButton);
	await t
		.expect(
			rpsActionButton.getStyleProperty(
				"border-top-color",
				"border-bottom-color",
				"border-left-color",
				"border-right-color"
			)
		)
		.eql("rgb(255, 0, 0)");
});

// after player picks RPS computer get its choice visible on separate box
