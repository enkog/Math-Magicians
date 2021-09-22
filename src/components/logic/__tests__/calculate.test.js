import calculate from '../calculate';

describe('handle buttons', () => {
  test('pressing AC button', () => {
    const obj = { total: 0, next: 2, operation: 'AC' };
    expect(calculate(obj, obj.operation)).toMatchObject({
      next: null,
      operation: null,
      total: 0,
    });
  });

  test('pressing AC button', () => {
    const obj = { total: 0, next: 2, operation: 'AC' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({
      next: 5,
      operation: null,
      total: 0,
    });
  });
});
