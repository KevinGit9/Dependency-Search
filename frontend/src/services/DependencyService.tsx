import axios from "../axios";

export const SearchDependency = async (dependencyName: string, fromVersion: string, toVersion: string) => {
    const path = `/SBOM/${dependencyName}/${fromVersion}/${toVersion}`;
    let response = await axios.get(path);
    console.log(response.data);
    return(response.data);
}
