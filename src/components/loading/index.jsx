import { LoaderCircle } from 'lucide-react';
import React from 'react'

export default function Loading() {
  return (
    <>
        <LoaderCircle
          width={50}
          height={50}
          className="flex justify-center items-center w-full motion-rotate-loop-[1turn]/reset motion-ease-linear text-[--primary]"
        />
    </>
  );
}
