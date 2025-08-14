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
    // Increment visitor count atomically
    const newCount = await kv.incr('visitor_count');
    
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        count: newCount,
        timestamp: new Date().toISOString(),
        message: 'Visitor count incremented'
      }),
    };
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Failed to increment visitor count',
        count: 0
      }),
    };
  }
};
