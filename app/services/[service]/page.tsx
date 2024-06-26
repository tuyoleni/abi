// app/services/[service].tsx
'use client'
import { useParams } from 'next/navigation';

export default function ServicePage() {
    const params = useParams();
    const { service } = params;

    return (
        <div>
            <h1>Service Details:</h1>
            <p>Service ID: {service}</p>
        </div>
    );
}
