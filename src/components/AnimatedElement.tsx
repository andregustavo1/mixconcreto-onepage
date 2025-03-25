
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-right';
  delay?: number;
  className?: string;
  duration?: number;
}

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  duration = 800,
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
                elementRef.current.style.transition = `opacity ${duration}ms ease-out`;
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
  }, [animation, delay, duration]);
  
  return (
    <div 
      ref={elementRef} 
      className={cn('opacity-0', className)}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationDuration: `${duration}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
