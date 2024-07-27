import axios from "axios";

const CLERK_API_KEY = process.env.CLERK_SECRET_KEY;

export async function GET(req) {
  // console.log('req: ', req);
  const url = new URL(req.url);
  const urlhref = url.href
  const urlList = urlhref.split('/')
  const userId = urlList[urlList.length - 1];
    const response = await axios.get(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: {
            'Authorization': `Bearer ${CLERK_API_KEY}`
        }
    });
    console.log('response: ', response);

    if (!response.ok) {
        console.error('Error fetching user:', response.statusText);
        return;
    }

    const user = await response.json();
    console.log('Username:', user.username);
}

