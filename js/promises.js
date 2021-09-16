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
            document.querySelector('.promises').innerHTML = html;
        }, 1000);
    }
    
    function createposts(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
    
                const error = false; // Switch to display error
    
                if(!error) {
                    resolve();
                } else {
                    reject('Something went wrong!');
                }
            }, 2000);
        });
    }
    
    createposts({ title: 'Post Three', body: 'This is a body from post Three' })
        .then(getPosts)
        .catch(err => console.log(err)); // reject if error is true   
})();