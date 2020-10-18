import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import aptitudelogo from '../../images/service.png';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function Banner (props) {
  const classes = useStyles();

   return (
       <div className="md:flex bg-yellow-200 shadow-lg rounded-lg p-0">
           <img className="h-16 w-16 rounded-full mx-auto md:mx-0 md:my-1 md:mr-3" src={aptitudelogo}/>
           <div className="flex-1 text-center md:text-left">
               <h2 className="text-xl text-center">Service</h2>
               <div className="text-gray-600">Please check the new services which Peer1on1 provides.</div>
           </div>
           <div className="flex justify-end justify-self-end py-1 md:p-0">
               <div className="w-32 m-auto">
               <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                 <Link to="/service">Learn More</Link>
               </button>
               </div>
            </div>    
       </div>       
  );
};