import {getCharacter} from '../snapshot';
import rick from "../rick.json";

describe("Es hora de las instantaneas", ()=>{
	test("snapshot", () =>{
		expect(getCharacter(rick)).toMatchSnapshot();
	})
	test('Instantánea con algunas Excepciones en sus paths', () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: 'Alejandro González Reyes',
      profesion: 'JavaScript and PHP Development',
      createdAt: new Date
    }

    // Se espera que la data recibida coincida con la instantánea. A excepción de los campos id y createdAt, los cuales se espera que reciban cualquier Numero y Fecha respectivamente
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
      createdAt: expect.any(Date)
    })
  })
})