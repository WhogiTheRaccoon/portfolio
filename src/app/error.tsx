'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
                <div className="container mx-auto items-center px-2 md:px-0 space-y-2" id="header">
                    <h1 className="text-6xl font-bold">Error ???</h1>
                    <h2 className="text-muted">Woops! Looks like my raccoon buddy broke something. He's working hard on fixing it!</h2>
                    <Button onClick={() => router.push('/')}>Home</Button>
                </div>
            </div>
            <div className="container mx-auto items-center text-center">
                <Image src="/images/error.png" alt="404" width={800} height={800} className="mx-auto" />
            </div>
        </>
    );
};