'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { RequestPasswordForm } from '../definitions';
import * as jose from 'jose';

export async function resetPassword(
  _currentState: unknown,
  formData: FormData
) {
  try {
    var form: RequestPasswordForm = {
      token: '',
      'new-password': '',
      'retype-password': '',
      email: '',
    };

    formData.forEach((value, key) => ((form as any)[key] = value));

    const decodedJwt = jose.decodeJwt(String(form.token));
    const email = (decodedJwt as any).transaction_token;

    form['email'] = email;

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
