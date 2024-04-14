import config from '@/config';

const fetchBlogs = async (params) => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const res = await fetch(`${config.api}/api/blogs?${params}`, reqOptions);
    const response = await res.json();
  
    return response;
}

export default fetchBlogs;