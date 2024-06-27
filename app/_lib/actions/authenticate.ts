'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const AuthRequestResult = await api.post('/auth/authenticate', formData);
    cookies().set('token', AuthRequestResult.data.token, {
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }

  redirect('/dashboard');
}
