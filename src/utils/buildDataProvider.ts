import { DataProvider, defaultDataProvider, fetchUtils } from "react-admin";


export function buildDataProvider(apiUrl: string): DataProvider {
  const httpClient = fetchUtils.fetchJson;
  return {
    ...defaultDataProvider,
    getMany: (resource, _params) => {
      const url = `${apiUrl}/${resource}/info`
      return httpClient(url).then(({json}) => ({ data: json }))
    }
  }
}