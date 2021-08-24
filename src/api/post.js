import dummyService from "../client/dummyService.js";
import Post from "../model/post.js";
// TBD, should api functions be grouped inside a class?
// like the way in /client/dummyService.js
export const getPost = async (pid) => {
    const postData = await dummyService.getPost(pid);
    const post = new Post(postData.title, postData.body);
    return post;
};
