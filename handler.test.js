'use strict';
const { tokenHandler } = require('./handler');
const axios = require('axios');

// Mock axios
jest.mock('axios');

describe('tokenHandler', () => {
    it('should return 200 and the API response on success', async () => {
        // Arrange
        const fakeEvent = {
            body: JSON.stringify({
                bfid: 'test-bfid',
                username: 'test-username',
                password: 'test-password'
            })
        };

        const mockResponse = {
            status: 200,
            data: { token: 'mock-token' }
        };

        // Mock axios.post to return a successful response
        axios.mockResolvedValue(mockResponse);

        // Act
        const result = await tokenHandler(fakeEvent);

        // Log result for debugging
        console.log('Result:', result);

        // Assert
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual(mockResponse.data);
    });
});
