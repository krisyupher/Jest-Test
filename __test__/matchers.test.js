import { sumer } from "../maths"
import { isNull, isTrue, isFalse, isUndefined } from "../true"
import { fruit, colors } from "../arrays"
describe("comparadores comune", () => {
	const user = {
		name: "oscar",
	}
	const user2 = {
		name: "oscar"
	}
	test("igualdad", () => {
		expect(user).toEqual(user2);
	})
	test("no igualdad", () => {
		expect(user).not.toEqual(user2);
	})
})
// numeros ---------
describe("Comparacion de numeros", () => {
	test("Mayor que ", () => {
		expect(sumer(2, 2)).toBeGreaterThan(3)
	})
	test("Mayor o igual ", () => {
		expect(sumer(2, 2)).toBeGreaterThanOrEqual(4)
	})
	test("Menor que ", () => {
		expect(sumer(2, 2)).toBeLessThan(5)
	})
	test("Meno o igual ", () => {
		expect(sumer(2, 2)).toBeLessThanOrEqual(5)
	})
	test("Numeros flotantes ", () => {
		expect(sumer(2.2, 2.2)).toBeCloseTo(4.4)
	})
})
// tipo de datos null, false, true, undefined
describe("Prueba null", () => {
	test("isNull", () => {
		expect(isNull()).toBeNull()
	})
})
describe("prueba true", () => {
	test("isTrue", () => {
		expect(isTrue()).toBeTruthy()
	})
})
describe("prueba false", () => {
	test("isFalse", () => {
		expect(isFalse()).toBeFalsy()
	})
})
describe("prueba undefined", () => {
	test("isUndefined", () => {
		expect(isUndefined()).toBeUndefined()
	})
})
describe("prueba no verdadero", () => {
	test("not isTrue", () => {
		expect(isTrue()).not.toBeTruthy()
	})
})
// arrays ----------
describe("Existe un elemento en el array", () => {
	test("¿Arreglo tiene banana?", () => {
		expect(fruit()).toContain("banana")
	})
	test("¿Arreglo tiene azul?", () => {
		expect(colors()).toContain("negro")
	})
	test("¿Arreglo NOOOO tiene banana?", () => {
		expect(fruit()).not.toContain("banana")
	})
	test("Tamaño del arreglo", () => {
		expect(fruit()).toHaveLength(5)
	})
})
