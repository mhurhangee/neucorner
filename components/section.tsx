export const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="container min-h-[calc(100vh-4rem)] py-8">
      {children}
    </section>
  )
}
