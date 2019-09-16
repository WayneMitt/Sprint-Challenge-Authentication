// const request = require('supertest');

// const server = require('./server');
const db = require('./database/dbConfig')

const Users = require('./auth/auth-model');

describe('the server', () => {

    beforeEach(async () => {
        await db('users').truncate()
    })
    describe('the insert function', () => {
        it('should insert a new user', async () => {
            const userData = {
                "username": "Wayne",
                "password": "pass"}
            const user = await Users.add(userData)
            const users = await db('users')
            expect(users.length).toBe(1)
            expect(users[0].username).toBe('Wayne')
        })
        it('should resolve to newly created user', async () => {
            const userData = {
                "username": "Wayne",
                "password": "pass"}
            const user = await Users.add(userData)

            expect(user).toEqual({ id: 1, name: 'Wayne'})
        })
    })
})