export const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="border-border container mx-auto min-h-screen border-b">
      {children}
    </section>
  )
}
