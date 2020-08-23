describe("comprobar cadenas de texto", () => {
	const texto = 'este es nuestro texto';
	test("texto debe contener", () => {
		expect(texto).toMatch(/es/)
	})
	test("texto debe contener", () => {
		expect(texto).not.toMatch(/es/)
	})
	test("comprobar tamaño", () => {
		expect(texto).toHaveLength(21)
	})
})