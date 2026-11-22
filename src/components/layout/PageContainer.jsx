export default function PageContainer({ children, className = '', as: Component = 'div' }) {
  return (
    <Component className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}

