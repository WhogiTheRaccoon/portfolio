'use client';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = '', ...props }: CardProps) {
    return (
        <div className={`p-5 bg-foreground rounded-md border-accent ${className}`} {...props}>
            {children}
        </div>
    );
}