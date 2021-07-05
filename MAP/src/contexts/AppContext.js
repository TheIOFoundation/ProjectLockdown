import {createContext} from 'react';
const defaultValue ={
    "environment": {
      "dsl_id": null,
      "components": [],
      "overlay": {
          "tabs": []
      }
    }
  }
const AppContext = createContext(defaultValue);
export default AppContext;

