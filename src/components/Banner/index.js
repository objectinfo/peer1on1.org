import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import aptitudelogo from '../../images/aptitude.jpg';
import '../../styles/global.css';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function Banner (props) {
  const classes = useStyles();

   return (
       <div className="md:flex bg-yellow-200 shadow-lg rounded-lg p-0">
           <img className="h-16 w-16 md:h-20 md:w-20 rounded-full mx-auto md:mx-0 md:my-1 md:mr-3" src={aptitudelogo}/>
           <div>
           <div className="text-center md:text-left">
               <h2 className="text-lg">Aptitude</h2>
               <div className="text-gray-600">Aptitude is an app that helps special needs children to achieve a better lifestyle through exercise videos, recipes and health related articles. This app is created in support of a non-profit organization: autism peer 1 on 1.</div>
           </div>
           </div>
           <div className="flex md:w-48 justify-center pb-1 md:p-0">
               <div className="m-auto">
               <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <a href="https://oneaptitude.weebly.com" target="_blank">Learn More</a>
               </button>
               </div>
            </div>    
       </div>       
  );
};