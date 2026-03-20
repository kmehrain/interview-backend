import { NextResponse } from 'next/server';
import { z } from 'zod';
import logger from '@/lib/logger';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function GET() {
  logger.info('GET /api/health called');
  return NextResponse.json({
    success: true,
    message: 'API is working',
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    logger.info('Request body received', { body });

    const parsed = schema.parse(body);
    logger.info('Validation succeeded', { parsed });

    return NextResponse.json({
      success: true,
      data: parsed,
    });
  } catch  {
    logger.warn('POST /api/health received invalid input');
    return NextResponse.json(
      { success: false, error: 'Invalid input' },
      { status: 400 }
    );
  }
}