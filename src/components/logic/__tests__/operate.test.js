import operate from '../operate'

describe('operations', () => {
    test('handle addition operation', () => {
        it('tests that 4 + 7 equals 11', () => {
            expect(operate(4, 7, '+')).toEqual('11');
        })

        it('tests that adds 4 + 7 does not equal 11', () => {
            expect(operate(4, 7, '+')).not.toEqual('15');
        })      
    })
})
