export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col items-start min-h-screen max-w-7xl mx-auto p-6">
            {children}
        </main>
    );
};