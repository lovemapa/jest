const axios = require('axios')

const functions = {

    add: (number1, number2) => number1 + number2,

    isNull: () => null,

    checkValue: c => c,

    createUser: () => {

        const user = { firstName: "Pawan" }
        user['lastName'] = 'Kumar'

        return user
    },

    fetchUser: () => {

        return axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                return res.data
            }).catch(err => err)
    }
}

module.exports = functions