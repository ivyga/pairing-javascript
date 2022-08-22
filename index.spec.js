import { fizzbuzz } from './index';

describe( 'fizzbuzz', () => {
  it('returns a number as a string', ()=> {
    const result = fizzbuzz(1);
    expect(result).toBe("1");
  });
});

