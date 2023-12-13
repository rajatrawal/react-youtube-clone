const GOOGLE_API_KEY = "AIzaSyD1jGJkZBOSMsXt4VF2qPS6gQqxziS3F3o"

export const LIVE_CHAT_TRESHHOLD = 200;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_ONE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + '&id=';

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" + GOOGLE_API_KEY;


