export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
};