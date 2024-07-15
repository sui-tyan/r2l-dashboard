'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { snakeCaseToSentenceCase } from '../stringUtils';

export async function uploadResearch(_currentState: unknown, formData: FormData) {
  try {

    const fileInput = formData.get("manuscript")

    if(fileInput instanceof File) {
        if(fileInput.size === 0) return "Manuscript is empty!";
    }

    for(const [key, value] of formData.entries()) {
        if(!value) {
            return `${snakeCaseToSentenceCase(key)} is empty!`
        }
    }

    console.log(formData)
    const uploadResult = await api.post('/research', formData)
  } catch (error: any) {
    if (error) {
        return error.cause;
    }
    throw error;
  }

  redirect('/dashboard');
}