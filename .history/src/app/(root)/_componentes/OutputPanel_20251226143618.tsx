'use client'
import React, { useState } from 'react'
import { useCodeEditorStore } from '@/src/store/useCodeEditorStore';

export default function OutputPanel() {
  const {output, error, isRunning} = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = error || output;

  const  handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(error || output);
  }

  return (
    <div>OutputPanel</div>
  )
}
