import { useEffect, useState } from "react";
// email
const useRole = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "admin") {
            setIsAdmin(true);
            setIsAdminLoading(true);
          }
          if (data.role === "Seller") {
            setIsSeller(true);
            setIsSellerLoading(false);
          }
          if (data.role === "Buyer") {
            setIsBuyer(true);
            setIsBuyerLoading(true);
          }
        })
        .catch((err) => {
          console.error("error useRole", err);
        });
    }
  }, [email]);
  return [
    isAdmin,
    isSeller,
    isBuyer,
    isAdminLoading,
    isBuyerLoading,
    isSellerLoading,
  ];
};

export default useRole;
