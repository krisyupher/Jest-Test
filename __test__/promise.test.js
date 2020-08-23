import { getDataFromApi } from "../promise"

describe("prbando promesas ", () => {
	test("Realizar peticion API", done => {
		const api = "https://rickandmortyapi.com/api/character/"
		getDataFromApi(api).then(data => {
			expect(data.results.length).toBeGreaterThan(0)
			done()
		})
	})
	test("resuelve un Hola ", () => {
		return expect(Promise.resolve("Hola")).resolves.toBe("Hola")
	})
})