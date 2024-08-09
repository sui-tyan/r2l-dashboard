'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as jose from 'jose';
import { SessionObj } from '../definitions';

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    var form = {};
    formData.forEach((value, key) => ((form as any)[key] = value));

    const AuthRequestResult = await api.post('/auth/authenticate', form);
    cookies().set('token', AuthRequestResult.data.token, {
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      switch (error.response.status) {
        case 401:
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  } finally {
    const decodedJwt = jose.decodeJwt(String(cookies().get('token')?.value));
    const sessionObj: SessionObj = {
      account_id: (decodedJwt as any).id.account_id,
      role: (decodedJwt as any).id.role,
    };

    if (sessionObj.role !== 'admin' && sessionObj.role !== 'researcher') {
      return redirect('/login');
    }

    if (sessionObj.role === 'admin') {
      return redirect('/admin/dashboard');
    }
    redirect('/repository');
  }
}
