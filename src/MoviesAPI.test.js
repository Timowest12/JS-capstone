//import {getmovielist} from './MoviesAPI.js'

test('check the number of movies the api pulls in', async () => {
    expect(getmovielist).toBe(50);
})