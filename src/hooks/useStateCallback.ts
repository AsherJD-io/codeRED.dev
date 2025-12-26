import { useEffect, useState } from "react";

export default function useStateCallback<T>(
  initialValue: T,
  callback: (state: T) => void,
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    callback(state);
  }, [state, callback]);

  return [state, setState];
}
