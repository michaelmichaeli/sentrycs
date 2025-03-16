import axios from 'axios';

/**
 * Check if a word exists in the English dictionary using the Free Dictionary API
 * @param word The word to check
 * @returns A boolean indicating if the word exists
 */
export const checkWordExists = async (word: string): Promise<boolean> => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
    return response.status === 200;
  } catch {
    return false;
  }
}; 