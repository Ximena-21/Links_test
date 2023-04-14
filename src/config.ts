
export const config = {
  API_URL: import.meta.env.DEV
    ? "http://ec2-54-160-84-172.compute-1.amazonaws.com:3000"
    : "https://d4ed-179-12-100-172.ngrok-free.app",
};
