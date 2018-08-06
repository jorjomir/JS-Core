let posts = (() => {
    function getMyChirps(author) {
        const endpoint = `chirps?query={"author":"${author}"}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    function getFollowers(username) {
        const endpoint = `?query={"subscriptions":"${username}"}`;

        return remote.get('user', endpoint, 'kinvey');
    }
    function getAllPosts(subs) {
        const endpoint = `chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createPost(author, text) {
        let data = { author, text };
        return remote.post('appdata', 'chirps', 'kinvey', data);
    }

    function follow(subscriptions) {
        const endpoint = sessionStorage.getItem("userId");
        let data = { subscriptions };

        return remote.update('user', endpoint, 'kinvey', data);
    }
    
    function deletePost(postId) {
        const endpoint = `posts/${postId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getMyPosts(username) {
        const endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    function getUsernameById(id) {
        const endpoint = `chirps?query={"_acl":{"creator":${id}}}&sort={"_kmd.ect": -1}`;
        // const endpoint = `?query={"username":"_${id}"}`;

        return remote.get('user', endpoint ,'kinvey');
    }

    function getUsers() {
        const endpoint = "";

        return remote.get('user', endpoint ,'kinvey');
    }

    return {
        getMyChirps,
        createPost,
        follow,
        deletePost,
        getMyPosts,
        getAllPosts,
        getFollowers,
        getUsers,
        getUsernameById
    }
})();