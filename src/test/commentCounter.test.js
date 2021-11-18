/**
 * @jest-environment jsdom
 */

import commentCounter from '../commentCounter.js';

jest.mock('../commentCounter');

describe('Count the number of comment', () => {
  test('Add comment to list', () => {
    expect(commentCounter()).toBe('Comments (2)');
  });
});