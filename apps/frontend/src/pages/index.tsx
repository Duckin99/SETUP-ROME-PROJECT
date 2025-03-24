import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState<string>("");

    useEffect(() => {
        fetch("http://localhost:3001/api/data")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <h1>Welcome to Next.js Monorepo</h1>
            <p>Backend says: {data}</p>
        </div>
    );
}
