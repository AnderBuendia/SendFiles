import React, { useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import Layout from '../components/Layout';
import Alert from '../components/Alert';
import Link from 'next/link';
import Dropzone from '../components/Dropzone';

const Index = () => {

  /* Get authenticated user from Storage */
  const AuthContext = useContext(authContext);
  const { authenticatedUser } = AuthContext;

  /* Get error message from files */
  const AppContext = useContext(appContext);
  const { file_msg, url } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem('rnstoken');
    
    if (token) {
      authenticatedUser();
    }
  }, []);

  return ( 
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        { url ? (
          <>
          <p className="text-center text-2xl mt-10">
            <span className="font-bold text-red-700 text-4xl uppercase">Your URL is:</span> {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/links/${url}`}
          </p>
          <button 
            type="button"
            className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
            onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/links/${url}`)}
          >Copy Link</button>
          </>
        ) : (
          <>
          { file_msg && <Alert /> }
          <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
            <Dropzone />
            <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
              <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
                Share your files easily and privately
              </h2>
              <p className="text-lg leading-loose mb-2">
                <span className="text-red-500 font-bold">ReactNodeSend</span> allows you to share files with end-to-end 
                encryption and a file that is deleted after downloading. So you can keep what you share private and make 
                sure your stuff doesn't stay online forever.
              </p>
              <Link href="/signup">
                <a className="text-red-500 font-bold text-lg hover:text-red-700">Sign up to obtain more privileges</a>
              </Link>
            </div>
          </div>
          </>
        )}
      </div>
    </Layout>  
  );
}
 
export default Index;
