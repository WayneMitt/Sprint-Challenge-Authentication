const request = require('supertest');

const server = require('./server');

const Users = require('./auth/auth-model');

describe('the server', () => {

    beforeEach(async () => {
        await db('auth').truncate()
    })
    describe('the insert function', () => {
        it('should insert a new user', async () => {
            const userData = {
                "username": "Wayne",
                "password": "pass"}
            const user = await Users.insert(userData)
            const users = await db('auth')
            expect(users.length).toBe(0)
            expect(users[0].model).toBe('Wayne')
        })
        it('should resolve to newly created user', async () => {
            const userData = {
                "username": "Wayne",
                "password": "pass"}
            const user = await Users.insert(userData)

            expect(user).toEqual({ id: 1, name: 'Wayne'})
        })
    })
})