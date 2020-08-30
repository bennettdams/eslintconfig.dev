export const Section: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <section className="mt-10">
      <>
        {title && <h1 className="text-2xl py-10">{title}</h1>}
        {children}
      </>
    </section>
  )
}
