'use client'
import React, { useState } from 'react'
import { useCodeEditorStore } from '@/src/store/useCodeEditorStore';

export default function OutputPanel() {
  const {outpu, error, isRunning} = useCodeEditorStore();
  const [isC, setisC] = useState(second)
  return (
    <div>OutputPanel</div>
  )
}
