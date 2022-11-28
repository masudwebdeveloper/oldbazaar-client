import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isAdmin)
                    setIsSellerLoading(false)
                })

        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSeller;