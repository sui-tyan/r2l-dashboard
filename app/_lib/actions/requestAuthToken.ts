'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requestAuthToken(
  _currentState: unknown,
  formData: FormData
) {
  try {
    var form = {};
    formData.forEach((value, key) => ((form as any)[key] = value));

    const AuthRequestResult = await api.post(
      '/account/admin/request-token',
      form
    );
  } catch (error: any) {
    if (error) {
      switch (error.response.status) {
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}
