
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-right';
  delay?: number;
  className?: string;
}

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  className = '' 
}: AnimatedElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add(`animate-${animation}`);
                elementRef.current.style.opacity = '1';
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay]);
  
  return (
    <div 
      ref={elementRef} 
      className={cn('opacity-0', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
