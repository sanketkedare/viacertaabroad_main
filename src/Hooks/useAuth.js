import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
    const { user } = useSelector((state) => state.user);
    const [isLoggedin, setIsLoggedIn] = useState(!!user);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    const verify = async () => {
        const url = "http://localhost:3000/api/user/me";
        
        try {
            setLoading(true);  // Set loading to true before starting the fetch
            setIsError(false);  // Reset error state before request

            const response = await fetch(url, { 
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Authentication Failed:", errorData.message);
                setIsError(true);
                setData(null);
                setLoading(false);
                return;
            }

            const json = await response.json();
            if (json.success) {
                console.log("Authenticated User:", json.user);
                setData(json.user);
                setIsLoggedIn(true);
            } else {
                console.error("Authentication Failed:", json.message);
                setIsError(true);
            }
        } 
        catch (error) {
            console.error("Error while authenticating:", error.message);
            setIsError(true);
        } 
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isLoggedin) {
            verify();
        } else {
            setLoading(false);
        }
    }, []);

    return { isLoggedin, isLoading, data, isError };
};

export default useAuth;
