// export type RequestProps = {
//   method: string;
//   url: string;
//   params?: object;
// };

export const request = async ({ url, method, params = {} }) => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  };
  const options =
    method === "get"
      ? { headers, method }
      : {
          headers,
          method,
          body: JSON.stringify(params),
        };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result);
    }
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
