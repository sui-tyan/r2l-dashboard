'use server';

import { api } from '@/lib/api';
import { error } from 'console';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requestPasswordReset(
  _currentState: unknown,
  formData: FormData
) {
  try {
    var form = {};
    formData.forEach((value, key) => ((form as any)[key] = value));

    const sendPasswordReset = await api.post(
      '/account/request-password-reset',
      form
    );
    if (sendPasswordReset.status === 200) {
      return 'Email sent!';
    }
  } catch (error: any) {
    if (error) {
      switch (error.response.status) {
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  } finally {
    console.log(error);
  }
}
