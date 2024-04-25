import { defer } from "react-router-dom";

import apiRequest from "../lib/apiRequest";

export const propertyLoader = async ({ request, params }) => {
  const response = await apiRequest(`/posts/${params.id}`);
  return response.data;
};

export const propertiesLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const propertiesPromise = apiRequest(`/posts?/${query}`);
  return defer({
    propertiesResponse: propertiesPromise,
  });
};

export const profileLoader = async () => {
  const profilePromise = apiRequest(`/users/profile-posts`);
  const chatPromise = apiRequest(`/chats`);
  return defer({
    profileResponse: profilePromise,
    chatResponse: chatPromise,
  });
};
