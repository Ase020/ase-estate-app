import apiRequest from "../lib/apiRequest";

export const propertyLoader = async ({ request, params }) => {
  const response = await apiRequest(`/posts/${params.id}`);
  return response.data;
};

export const propertiesLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const response = await apiRequest(`/posts?/${query}`);
  return response.data;
};
