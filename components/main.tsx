export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-start p-6">{children}</main>
  )
}
