import { EndpointsType } from "@/types";

export default async function fetchAPI<T>(apiConfig: EndpointsType[keyof EndpointsType]): Promise<T> {
  try {
    const responseJSON = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }${ apiConfig.url }`, apiConfig.options);
    const response = responseJSON.json();
    return response;
  } catch (error) {
    throw error;
  }
}