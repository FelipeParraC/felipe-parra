import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Felipe Parra",
    description: "Página de presentación de Felipe Parra",
    keywords: ['Felipe Parra Castro', 'Felipe Parra', 'Felipe', 'Parra', 'Desarrollo Web']
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="es">
            <body className={montserrat.className}>
                <main className="flex flex-col items-center p-24">
                    <span className="text-3xl">Felipe Parra Castro</span>
                    { children }
                    <span className="text-2xl mt-5">Muy pronto...</span>
                </main>
            </body>
        </html>
    );
}

export default RootLayout