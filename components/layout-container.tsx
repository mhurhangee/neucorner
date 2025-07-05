import { Footer } from './layout-footer'
import { Header } from './layout-header'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full overflow-x-hidden">
      <div className="max-w-3xl">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
