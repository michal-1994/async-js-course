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

    // function createPosts(post, callback) {
    //     setTimeout(() => {
    //         posts.push(post);
    //         callback();
    //     }, 2000);
    // }

    // getPosts();
    // createPosts({ title: 'Post Three', body: 'This is a body from post Three' }, getPosts);

    // PROMISE ALL START
        // const promise1 = Promise.resolve('Hello World!');
        // const promise2 = 10;
        // const promise3 = new Promise((resolve, reject) => {
        //     setTimeout(resolve, 2000, 'Goodbye');
        // });
        // const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json());

        // Promise.all([promise1, promise2, promise3, promise4])
        //     .then(values => {
        //         console.log(values);
        //     });

    // ASYNC / AWAIT START
        async function init() {
            
        }

})();