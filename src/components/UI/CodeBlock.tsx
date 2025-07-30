import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const codeString = React.Children.toArray(children).join('').trim();

  return (
    <SyntaxHighlighter
      language="python"
      style={oneLight}
      customStyle={{
        borderRadius: '0.5rem',
        padding: '1rem',
        fontSize: '0.875rem',
        backgroundColor: '#f9fafb', // Un gris muy claro para el fondo
      }}
      codeTagProps={{
        style: {
          fontFamily: '"Fira Code", "Dank Mono", monospace',
        },
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
