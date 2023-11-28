import { User } from "@supabase/auth-helpers-nextjs"
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext(undefined);

export interface Props {
    [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
    const {session, isLoading: isLoadingUser, supabaseClient: supabase} = useSessionContext();
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    const getUserDetails = () => supabase.from("users").select("*").single();

    useEffect(( => {
        if (user && !isLoadingData && !userDetails) {
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails()]).then(
                (results) => {
                    const userDetailsPromise = results
                }
            )
        }
    }, []);
}