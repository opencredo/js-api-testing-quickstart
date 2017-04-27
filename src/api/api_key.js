/* @flow */

export default function getApiKey(): string {
    const apiKeyEnv = process.env.TWFY_KEY;
    if (!apiKeyEnv) { throw new Error('They work for you API key not set'); }
    const apiKey: string = apiKeyEnv;
    return apiKey;
}
