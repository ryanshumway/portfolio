import React, { useState, type ReactNode } from 'react';
import { ButtonToggleContainer, ToggleButton } from './ButtonToggle.styles';

export interface ButtonOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface ButtonToggleProps {
  options: ButtonOption[] | string[];
  defaultActive?: string | number; // value or index
  onSelectionChange?: (value: string, index: number) => void;
  className?: string;
}

export const ButtonToggle: React.FC<ButtonToggleProps> = ({
  options,
  defaultActive,
  onSelectionChange,
  className
}) => {
  // Normalize options to ButtonOption format
  const normalizedOptions: ButtonOption[] = options.map((option) => {
    if (typeof option === 'string') {
      return { label: option, value: option };
    }
    return option;
  });

  // Determine initial active index
  const getInitialActiveIndex = (): number => {
    if (defaultActive === undefined) return 0;
    
    if (typeof defaultActive === 'number') {
      return Math.max(0, Math.min(defaultActive, normalizedOptions.length - 1));
    }
    
    const foundIndex = normalizedOptions.findIndex(opt => opt.value === defaultActive);
    return foundIndex >= 0 ? foundIndex : 0;
  };

  const [activeIndex, setActiveIndex] = useState<number>(getInitialActiveIndex());

  const handleButtonClick = (index: number) => {
    if (index === activeIndex) return; // Already active
    
    setActiveIndex(index);
    onSelectionChange?.(normalizedOptions[index].value, index);
  };

  return (
    <ButtonToggleContainer className={className}>
      {normalizedOptions.map((option, index) => (
        <ToggleButton
          key={`${option.value}-${index}`}
          $isActive={activeIndex === index}
          onClick={() => handleButtonClick(index)}
          type="button"
        >
          {option.icon && option.icon}
          {option.label}
        </ToggleButton>
      ))}
    </ButtonToggleContainer>
  );
}; 