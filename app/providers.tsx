// ClientComponent.tsx (new file)
'use client';

import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from 'sonner';

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <TooltipProvider>
                {children}
                <Toaster />
            </TooltipProvider>
        </SessionProvider>
    );
}
