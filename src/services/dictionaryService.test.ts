import axios from 'axios';
import { checkWordExists } from './dictionaryService';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('dictionaryService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return true when word exists', async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: [{ word: 'test' }] });
    
    const result = await checkWordExists('test');
    
    expect(result).toBe(true);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/test');
  });

  test('should return false when word does not exist', async () => {
    mockedAxios.get.mockRejectedValue({ response: { status: 404 } });
    
    const result = await checkWordExists('xyzabc');
    
    expect(result).toBe(false);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/xyzabc');
  });

  test('should convert word to lowercase before checking', async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: [{ word: 'test' }] });
    
    await checkWordExists('TEST');
    
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/test');
  });
}); 