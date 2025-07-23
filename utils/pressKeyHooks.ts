import { KeyboardEvent, useCallback } from 'react';

type UseKeyboardClickProps = {
  onEnterOrSpace: () => void;
};

export function useKeyboardClick({ onEnterOrSpace }: UseKeyboardClickProps) {
  return useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onEnterOrSpace();
      }
    },
    [onEnterOrSpace]
  );
}
