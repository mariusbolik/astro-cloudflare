export function errorResponse(name: ErrorName, message: string) {
  const body: ErrorResponse = {
    error: {
      name,
      message
    }
  };
  return new Response(JSON.stringify(body), {
    status: 500,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export interface ErrorResponse {
  error: {
    name: ErrorName,
    message: string;
  }
}

export type ErrorName = 'ai_error' | 'empty_ai_response' | 'image_transformation_error'
