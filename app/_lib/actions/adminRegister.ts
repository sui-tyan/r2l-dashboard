'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function adminRegister(
  _currentState: unknown,
  formData: FormData
) {
  try {
    if (formData.get('password') !== formData.get('confirm_password')) {
      throw new Error("Password didn't match!", { cause: 'Not Match' });
    }

    var form = {};
    formData.forEach((value, key) => ((form as any)[key] = value));

    const AuthRequestResult = await api.post(
      '/account/admin/create-user',
      form
    );
    cookies().set('token', AuthRequestResult.data.token, {
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error: any) {
    if (error) {
      switch (error.response.status) {
        case 401:
          return 'Authorization Token Invalid';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }

  redirect('/dashboard');
}
