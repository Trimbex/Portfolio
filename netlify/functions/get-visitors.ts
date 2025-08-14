import { createClient } from '@vercel/kv';

// Initialize KV client with explicit configuration
const kv = createClient({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export const handler = async (event: any, context: any) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Get current visitor count
    const count = await kv.get('visitor_count') || 0;
    
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        count: typeof count === 'number' ? count : parseInt(count as string) || 0,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error('Error getting visitor count:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Failed to get visitor count',
        count: 0
      }),
    };
  }
};
