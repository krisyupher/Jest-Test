//After each test
afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("despues de todas las pruebas"));

//Before all test
beforeAll(() => console.log("antes de todas las pruebas"));
beforeEach(() => console.log("Antes de cada prueba"));


describe("comprobar True", () => {
	test("True", () => {
		expect(true).toBeTruthy()
	})
})
describe("comprobar False", () => {
	test("False", () => {
		expect(false).toBeFalsy()
	})
})