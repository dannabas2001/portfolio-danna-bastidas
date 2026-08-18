import { useReveal } from '../hooks/useReveal'

// Wraps children in a div that fades + slides up into view on scroll.
// `delay` (ms) lets sibling items stagger for a nicer cascade effect.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
