/**
 * @jest-environment jsdom
 */

 import movieCounter from '../movieCounter.js';

 jest.mock('../movieCounter');
 
 describe('Count the number of movies', () => {
   test('Add movie to list', () => {
    expect(movieCounter()).toBe('(2)');;
   });
 });