import calculate from '../../components/logic/calculate';

describe('handle buttons', () => {
  test('pressing AC button', () => {
    const obj = { total: 0, next: 2, operation: 'AC' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: null, operation: null, total: 0 });
  });

  test('pressing AC button', () => {
    const obj = { total: 0, next: 2, operation: 'AC' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({ next: 5, operation: null, total: 0 });
  });

  test('pressing 0 button twice', () => {
    const obj = { total: 0, next: 0, operation: '+' };
    expect(calculate(obj, obj.operation)).toMatchObject({});
  });

  test('Adding', () => {
    const obj = { total: 1, next: 2, operation: '+' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: null, operation: '+', total: '3' });
  });

  test('Adding', () => {
    const obj = { total: 1, next: 2, operation: '+' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({ next: null, operation: '+', total: '10' });
  });

  test('Subtracting', () => {
    const obj = { total: 1, next: 2, operation: '-' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: null, operation: '-', total: '-1' });
  });

  test('Subtracting', () => {
    const obj = { total: 1, next: 2, operation: '-' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({ next: null, operation: '-', total: '0' });
  });

  test('Multiplication', () => {
    const obj = { total: 2, next: 2, operation: 'x' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: null, operation: 'x', total: '4' });
  });

  test('Multiplication', () => {
    const obj = { total: 2, next: 2, operation: 'x' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({ next: null, operation: 'x', total: '8' });
  });

  test('Division', () => {
    const obj = { total: 2, next: 2, operation: '÷' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: null, operation: '÷', total: '1' });
  });

  test('Division', () => {
    const obj = { total: 2, next: 2, operation: '÷' };
    expect(calculate(obj, obj.operation)).not.toMatchObject({ next: null, operation: '÷', total: '0' });
  });

  test('Addition/Subtraction', () => {
    const obj = { next: 4, operation: '+/-' };
    expect(calculate(obj, obj.operation)).toMatchObject({ next: '-4', operation: '+/-' });
  });

  test('Addition/Subtraction', () => {
    const obj = { total: 7, operation: '+/-' };
    expect(calculate(obj, obj.operation)).toMatchObject({ total: '-7', operation: '+/-' });
  });
});
