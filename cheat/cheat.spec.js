import { fizzbuzz } from '../index';

const generateNumber = () => {
  let testCase;
  do{
    testCase =Math.floor(Math.random() * 1000);
  }
  while(testCase%3 === 0 || testCase%5 === 0)
  
  return testCase;
}

describe( 'fizzbuzz', () => {
  it('returns a number as a string', ()=> {
    const value = generateNumber();
    const result = fizzbuzz(value);
    expect(result).toBe(value.toString());
  });

  it('returns the string "Fizz" when input is divisible by 3', ()=> {
    const testCase = 3;
    const result = fizzbuzz(testCase);
    expect(result).toBe("Fizz");
  });

  it('returns the string "Buzz" when input is divisible by 5', ()=> {
    const testCase = 5;
    const result = fizzbuzz(testCase);
    expect(result).toBe("Buzz");
  });

  it('returns the string "FizzBuzz" when input is divisible by 15', ()=> {
    const testCase = 15;
    const result = fizzbuzz(testCase);
    expect(result).toBe("FizzBuzz");
  });

});

