import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.role === 'admin'){
                        setIsAdmin(true)
                    }
                    if(data.role === 'Seller'){
                        setIsSeller(true)
                    }
                    if(data.role === 'Buyer'){
                        setIsBuyer(true)
                    }
                })
                .catch(err => {
                    console.error('error useRole', err);
                })
        }
    }, [email])
    return [isAdmin, isSeller, isBuyer]
};

export default useRole;