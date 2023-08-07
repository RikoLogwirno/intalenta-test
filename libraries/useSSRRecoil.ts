'use client';
import { useEffect, useState } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

export function useSSRRecoil<T, U>(defaultValue: T, recoilState: RecoilState<U>) {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(recoilState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}