export const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
    return (
        <section id={id} className="container mx-auto min-h-screen border-b border-border">
            {children}
        </section>
    );
};