import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '09565f29f6f14a76ab6e909567132ba9'
    }
})