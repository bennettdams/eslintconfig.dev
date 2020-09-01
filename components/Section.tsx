export const Section: React.FC<{ title?: string; fadeIn?: boolean }> = ({
  children,
  title,
  fadeIn = false,
}) => {
  return (
    <section className={`mt-10` + ` ${fadeIn && 'animate-fade-in'}`}>
      <>
        {title && <h1 className="text-2xl py-10">{title}</h1>}
        {children}
      </>
    </section>
  )
}
