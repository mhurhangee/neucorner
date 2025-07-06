export const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="container min-h-[calc(100vh-4rem)] pt-8 pb-24">
      {children}
    </section>
  )
}
