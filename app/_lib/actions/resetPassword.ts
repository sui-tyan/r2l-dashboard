'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function resetPassword(
  _currentState: unknown,
  formData: FormData
) {
  try {
    var form = {};
    formData.forEach((value, key) => ((form as any)[key] = value));
    const resetPasswordRequest = await api.post(
      '/account/reset-password',
      form
    );

    if (resetPasswordRequest.status === 200) {
      redirect('/login');
    }
  } catch (error: any) {
    console.error(error);
    throw error;
  }

  //   redirect('/dashboard');
}
