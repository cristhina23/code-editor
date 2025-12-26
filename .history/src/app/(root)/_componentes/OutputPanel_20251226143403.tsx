'use client'
import React from 'react'
import { useCodeEditorStore } from '@/src/store/useCodeEditorStore';

export default function OutputPanel() {
  const {outpu, error, isRunning} = useCodeEditorStore();
  
  return (
    <div>OutputPanel</div>
  )
}
