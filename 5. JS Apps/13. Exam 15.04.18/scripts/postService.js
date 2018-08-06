let posts = (() => {
    function getActiveReceipt(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createPost(product, productCount, total, active) {
        let data = { product, productCount, total, active };

        return remote.post('appdata', 'receipts', 'kinvey', data);
    }
    function createActiveReceipt() {
        let data = {
            active: true,
            productCount:0,
            total:0
        };

        return remote.post('appdata', 'receipts', 'kinvey', data);
    }
    function editPost(postId, author, title, description, url, imageUrl) {
        const endpoint = `posts/${postId}`;
        let data = { author, title, description, url, imageUrl };

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function deletePost(postId) {
        const endpoint = `receipts/${postId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getMyPosts(username) {
        const endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getPostById(postId) {
        const endpoint = `posts/${postId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getActiveReceipt,
        createPost,
        editPost,
        deletePost,
        getPostById,
        getMyPosts,
        createActiveReceipt,

    }
})();