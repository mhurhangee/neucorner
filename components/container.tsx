export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full overflow-x-hidden">
    <div className="max-w-3xl">{children}</div>
  </div>
}
