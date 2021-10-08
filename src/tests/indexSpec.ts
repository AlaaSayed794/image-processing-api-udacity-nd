import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
    const validFile = "fjord"
    const invalidFile = "nonExistingFile"
    const width = 300
    const height = 400

    it('gets the main endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('use api/images?filename={yourfilename} to get started')
    }
    )
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        expect(response.text).toBe('use api/images?filename={yourfilename} to get started')
    }
    )
    it('get api/images with invalid file', async () => {
        const response = await request.get('/api/images?filename=' + invalidFile);
        expect(response.status).toBe(400);
        expect(response.text).toBe('file name is invalid')
    }
    )
    it('get api/images with no parameters', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
        expect(response.text).toBe('please provide valid filename as a query parameter')
    }
    )
    it('get api/images with valid file', async () => {
        const response = await request.get('/api/images?filename=' + validFile);
        expect(response.status).toBe(200);
    }
    )

    it('get api/images with valid file and resized width', async () => {
        const response = await request.get(`/api/images?filename=${validFile}&width=${width}`);
        expect(response.status).toBe(200);
    }
    )

    it('get api/images with valid file and resized height', async () => {
        const response = await request.get(`/api/images?filename=${validFile}&height=${height}`);
        expect(response.status).toBe(200);
    }
    )
    it('get api/images with valid file and resized width and height', async () => {
        const response = await request.get(`/api/images?filename=${validFile}&width=${width}&height=${height}`);
        expect(response.status).toBe(200);
    }
    )
});