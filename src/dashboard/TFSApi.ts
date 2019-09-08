import useAxios from "axios-hooks";
import { ReleaseData } from "./Types";

const API_URL =
  "https://my-json-server.typicode.com/rvramesh/tfs-release-dash/";

const useTfsApi = {
  useReleaseData: function(environment: string) {
    return useAxios<ReleaseData[]>(API_URL + environment);
  }
};

export default useTfsApi;
