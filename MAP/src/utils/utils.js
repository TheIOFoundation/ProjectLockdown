 export const  toBool = (string) =>  {
     if(typeof(string) == Boolean ) return string;
     return string === 'true' ? true : false;
 }

