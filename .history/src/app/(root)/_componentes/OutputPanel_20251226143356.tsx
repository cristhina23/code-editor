'use client'
import React from 'react'
import { useCodeEditorStore } from '@/src/store/useCodeEditorStore';

export default function OutputPanel() {
  const {outpu, error, } = useCodeEditorStore();
  return (
    <div>OutputPanel</div>
  )
}
