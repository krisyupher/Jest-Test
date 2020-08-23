import { getDataFromApi } from "../promise";
const regeneratorRuntime = require("regenerator-runtime");
describe("prbando async ", () => {
	test("peticion a una API", async () => {
		const api = "https://rickandmortyapi.com/api/character/"
		const getRick = "https://rickandmortyapi.com/api/character/1"
		await getDataFromApi(api).then(data => {
			expect(data.results.length).toBeGreaterThan(0)
		})
		await getDataFromApi(getRick).then(data => {
			expect(data.name).toEqual("Rick Sanchez")
		});
	});
});
describe('Probar Async/Await', () => {
	test('Realizar una petición a una API', async () => {
		const api = 'https://rickandmortyapi.com/api/character/';
		const getRick = 'https://rickandmortyapi.com/api/character/1'

		const data = await getDataFromApi(api);
		expect(data.results.length).toBeGreaterThanOrEqual(0);

		const data2 = await getDataFromApi(getRick)
		expect(data2.name).toEqual('Rick Sanchez');
	});
});
describe('Ralizando una petición a una api con error', () => {
	test('Ralizando una petición a una api con error', async () => {
		const api = 'http://httpstat.us/404/';
		const data = getDataFromApi(api);
		await expect(data).rejects.toEqual(Error("Request failed with status code 404"))
	});
});