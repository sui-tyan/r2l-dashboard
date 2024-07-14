'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function register(_currentState: unknown, formData: FormData) {
  try {
    if (formData.get('password') !== formData.get('confirm_password')) {
      throw new Error("Password didn't match!", { cause: 'Not Match' });
    }
    const AuthRequestResult = await api.post('/account/create-user', formData);
    cookies().set('token', AuthRequestResult.data.token, {
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error: any) {
    if (error) {
      console.log(error.cause) //! remove this when pushing to prod
      switch (error.cause) {
        case 'Not Match':
          return "Password didn't match!";
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }

  redirect('/dashboard');
}
