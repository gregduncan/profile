import { ReactNode } from 'react';

interface ToggleProps {
  visible: boolean;
  children: ReactNode;
}

export const Toggle = ({ visible, children }: ToggleProps) => {
  if (visible) {
    return <>{children}</>;
  } else {
    return null;
  }
};
