import { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://old-bazaar-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isAdmin);
                    setIsBuyerLoading(false);
                })

        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;