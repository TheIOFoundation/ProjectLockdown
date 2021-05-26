import { useQuery } from "react-query";
import { fetchEnvironments } from '../api/index';

export const useEnvironments = ()=>{
    const { data, error, isFetching } = useQuery('Environment',fetchEnvironments);

    return { data,error, isFetching }

}