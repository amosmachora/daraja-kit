import { BASE_URL } from "../../env";
import MockAdapter from 'axios-mock-adapter';
import { TAccessTokenResponse } from '../../types';
import axios from 'axios';
import cache from 'memory-cache';
import { generateAccessToken } from '../access-token';

const mockAxios = new MockAdapter(axios);

describe('generateAccessToken', () => {
  beforeEach(() => {
    mockAxios.reset();
    cache.clear();
  });

  
  afterAll(() => {
    // cleanup to close any pending async states from axios
    mockAxios.reset();
    cache.clear();

  });


  it('should return access token from cache if available', async () => {
    const cachedToken: TAccessTokenResponse = {
      access_token: 'cachedAccessToken',
      expires_in: '3600',
    };
    cache.put('act', cachedToken, 3599 * 1000);

    const result = await generateAccessToken();

    expect(result).toEqual(cachedToken);
    expect(mockAxios.history.get).toHaveLength(0); // Ensure no HTTP request was made
  });



  it('should return access token from the server and cache it', async () => {
    const mockToken: TAccessTokenResponse = {
      access_token: 'mockAccessToken',
      expires_in: '3600',
    };
    mockAxios.onGet(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`).reply(200, mockToken);

    const result = await generateAccessToken();

    expect(result).toEqual(mockToken);
    expect(mockAxios.history.get).toHaveLength(1); // Ensure only one HTTP request was made

    // Check that the cache was set
    const cachedToken = cache.get('act') as TAccessTokenResponse;
    expect(cachedToken).toEqual(mockToken);
  });

  it('should throw an error if the server returns an error', async () => {
    mockAxios.onGet(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`).reply(500, 'Internal Server Error');

    await expect(generateAccessToken()).rejects.toThrow('Error occurred with status code 500');
  });
});
