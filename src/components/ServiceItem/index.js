import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/global.css';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function ServiceItem (props) {

   const {logoPicture, title, introduction, serviceLink} = props;
   return (
       <div className="flex flex-wrap bg-white shadow-lg border rounded-lg m-2">
           <img className="h-16 w-16 rounded-full mx-auto md:mx-1 md:my-1 md:mr-3" src={logoPicture}/>
           <div className="w-full sm:flex-1">
               <h2 className="text-xl text-center">{title}</h2>
               <div className="text-gray-600 text-center md:text-left">{introduction}</div>
           </div>
           <div className="justify-center m-auto py-1 md:p-0">
               <div className="m-auto">
               <button className={`bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
                  border border-blue-500 hover:border-transparent rounded md:mr-2 justify-self-end ` + (serviceLink ? '' : 'opacity-50 cursor-not-allowed')}>
                  <a href={serviceLink} target="_blank" className={serviceLink ? '' : 'cursor-not-allowed'}>{introduction ? "Learn More" : "Coming Soon"}</a>
               </button>
               </div>
            </div>    
       </div>       
  );
};