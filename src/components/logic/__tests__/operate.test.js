import operate from '../operate'

describe('handle operations', () => {
    test('that 4 + 7 equals 11', () => {
        expect(operate(4, 7, '+')).toEqual('11');
    })
    
    test('that adds 4 + 7 does not equal 11', () => {
        expect(operate(4, 7, '+')).not.toEqual('15');
    })
    
    test('that 10 - 6 equals 4', () => {
        expect(operate(10, 6, '-')).toEqual('4');
    })
    
    test('that adds 5 - 7 does not equal 11', () => {
        expect(operate(5, 7, '-')).not.toEqual('2');
    })
    
    test('that 2 x 3 equals 6', () => {
        expect(operate(2, 3, 'x')).toEqual('6');
    })
    
    test('tests that 4 x 7 does not equal 12', () => {
        expect(operate(4, 7, 'x')).not.toEqual('12');
    })
})
      


