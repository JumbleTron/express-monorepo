import { randomNumbers } from './random-numbers';

describe('randomNumbers', () => {
  it('should work', () => {
    expect(randomNumbers(100, 110)).toBeGreaterThanOrEqual(100);
  });
});
