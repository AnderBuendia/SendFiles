import React, { useState, useContext } from 'react';
import appContext from '../context/app/appContext';

const Form = () => {

    /* appContext */
    const AppContext = useContext(appContext);
    const { addPassword, addDownloads } = AppContext;
    
    const [hasPassword, setHasPassword] = useState(false);

    return ( 
        <div className="w-full mt-20 mb-5">
            <div>
                <label className="text-lg text-gray-800">Delete after:</label>
                <select 
                    defaultValue={'DEFAULT'} 
                    className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
                    onChange={e => addDownloads(parseInt(e.target.value))}
                >
                    <option value="DEFAULT" disabled>-- Select an option--</option>
                    <option value="1">1 Download</option>
                    <option value="5">5 Downloads</option>
                    <option value="10">10 Downloads</option>
                    <option value="20">20 Downloads</option>
                </select>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <label className="text-lg text-gray-800 mr-2">Password protect</label>
                    <input 
                        type="checkbox" 
                        onChange={() => setHasPassword(!hasPassword)}
                    />
                </div>
                { hasPassword ? (   
                    <input
                        type="password" 
                        className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
                        onChange={e => addPassword(e.target.value)}
                    />
                ) : null }
            </div>
        </div>
    );
}
 
export default Form;