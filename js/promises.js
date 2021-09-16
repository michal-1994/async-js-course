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
    
    function createPost(post) {
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
    

    // PROMISE
        createPost({ title: 'Post Three', body: 'This is a body from post Three' })
            .then(getPosts)
            .catch(err => console.log(err)); // reject if error is true   


    // ASYNC / AWAIT START
        // async function init() {
        //     await createPost({ title: 'Post Three', body: 'This is a body from post Three' });
        //     getPosts();
        // }
        // init();


    // ASYNC / AWAIT / FETCH 
        // async function fetchUsers() {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users');

        //     const data = await res.json();
        //     console.log(data);
        // }
        // fetchUsers();
})();