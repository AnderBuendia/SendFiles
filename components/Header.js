import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { useRouter } from 'next/router';

const Header = () => {

    /* Routing */
    const router = useRouter();

    /* Get authenticated user from Storage */
    const AuthContext = useContext(authContext);
    const { user, authenticatedUser, signOut } = AuthContext;

    /* Get appContext */
    const AppContext = useContext(appContext);
    const { cleanState } = AppContext;

    useEffect(() => {
        authenticatedUser();  
    }, []);

    const redirect = () => {
        router.push('/');
        cleanState();
    }

    return ( 
        <header className="py-8 flex flex-row md:flex-row items-center justify-between"> 
            <img 
                className="w-64 md:mb-0 cursor-pointer" src="/logo.svg" 
                onClick={() => redirect()}
            />

            <div>
                {
                    user ? (
                        <div className="flex items-center">
                            <p className="mr-2">Hola, {user.name}</p>
                            <button 
                                type="button"
                                className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
                                onClick={() => signOut()}
                            >Sign Out</button>
                        </div>
                    ) : (
                        <>
                        <Link href="/login">
                            <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">
                                Login
                            </a>
                        </Link>
                        <Link href="/signup">
                            <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">
                                Sign Up
                            </a>
                        </Link>
                        </>
                    )
                }
            </div>
        </header>
    );
}
 
export default Header;