export const api = {
  signup(info) {
    return fetch("address", {
      method: "POST/GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });
  }
};
