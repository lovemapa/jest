const functions = require('../function')

describe('Testing JEST', () => {

    test('Add 2+2', () => {

        expect(functions.add(2, 2)).toBe(4)
    });


    test('Should send null', () => {

        expect(functions.isNull()).toBeNull()
    });



    test('Should send null', () => {

        expect(functions.checkValue(0)).toBeFalsy()
    });


    it('USer ID should be 1', async () => {

        expect.assertions(1)

        const data = await functions.fetchUser()

        return expect(data.userId).toEqual(1)
    });
})


// test('User should be Pawan Kumar', () => {

//     expect(functions.createUser()).toStrictEqual({
//         firstName: 'Pawan',
//         lastName: 'Kumar'

//     })
// });
