import { callbackHell } from "../callbacks"

describe("preuba callBack", () => {
	test("probar", (done) => {
		const OtherCallBack = (data) => {
			expect(data).toBe("Hola mundo")
			done()
		}
		callbackHell(OtherCallBack)
	})
})