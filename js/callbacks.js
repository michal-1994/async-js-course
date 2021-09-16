(function() {
    const posts = [
        { title: 'Post One', body: 'This is a body from post One' },
        { title: 'Post Two', body: 'This is a body from post Two' }
    ];

    function getPosts() {
        setTimeout(() => {
            let html = '';
            posts.forEach((post) => {
                html += `<li>${post.title}</li>`;
            });
            document.querySelector('.callbacks').innerHTML = html;
        }, 1000);
    }

    function createPost(post, callback) {
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    }

    getPosts();
    createPost({ title: 'Post Three', body: 'This is a body from post Three' }, getPosts);
})();