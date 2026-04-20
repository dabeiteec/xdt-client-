import Header from "src/widgets/global/header";

export default function SubLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            {children}
        </div>
    );
}
