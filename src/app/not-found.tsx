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
                    <h1 className="text-6xl font-bold">Error 404</h1>
                    <h2 className="text-muted">Well this is kind of awkward... This page dosnt exist</h2>
                    <Button onClick={() => router.back()}>Back</Button>
                </div>
            </div>
            <div className="container mx-auto items-center text-center">
                <Image src="/images/404.png" alt="404" width={800} height={800} className="mx-auto" />
            </div>
        </>
    );
};