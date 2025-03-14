
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 300,
  as: Component = 'div',
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Component
      className={cn(
        'transition-opacity duration-300 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

export function FadeInStagger({
  children,
  className,
  childClassName,
  staggerDelay = 50,
  initialDelay = 0,
  duration = 300,
  as: Component = 'div',
  childAs: ChildComponent = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
  initialDelay?: number;
  duration?: number;
  as?: React.ElementType;
  childAs?: React.ElementType;
}) {
  return (
    <Component className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeIn
          key={index}
          delay={initialDelay + index * staggerDelay}
          duration={duration}
          className={childClassName}
          as={ChildComponent}
        >
          {child}
        </FadeIn>
      ))}
    </Component>
  );
}
