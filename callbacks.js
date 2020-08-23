export const callbackHell = (callBack) => {
	setTimeout(() => {
		callBack("Hola mundo")
	}, 2000);
}