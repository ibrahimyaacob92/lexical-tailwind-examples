import type { JSX } from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
  onError: (error: Error) => void;
};

/**
 * Error boundary wrapper component for Lexical v0.38+
 * The ErrorBoundary prop in RichTextPlugin/PlainTextPlugin now expects
 * a component that matches the ErrorBoundaryType interface
 */
export default function LexicalErrorBoundaryWrapper({ children, onError }: ErrorBoundaryProps) {
  return children;
}
