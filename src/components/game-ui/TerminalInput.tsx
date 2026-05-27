import React from 'react';

interface TerminalInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'textarea';
  disabled?: boolean;
  required?: boolean;
}

/* GAME UI TERMINAL INPUT - CLI-style form input with > prompt */
const TerminalInput: React.FC<TerminalInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
}) => {
  const commonStyles =
    'w-full bg-card text-foreground font-mono text-xs md:text-sm pixel-border-2 border-border px-3 py-2 placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors';

  return (
    <div className="space-y-2">
      <label className="block text-xs md:text-sm font-mono text-foreground uppercase tracking-wider">
        &gt; {label.toUpperCase()}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={4}
          className={commonStyles}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={commonStyles}
        />
      )}
    </div>
  );
};

export default TerminalInput;
