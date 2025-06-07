document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const postForm = document.getElementById('postForm');
  
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
       
            displayPosts(posts.slice(0, 5));
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            postsContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
        });
    
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        
        if (title && body) {
            addNewPost(title, body);
            postForm.reset();
        }
    });
    
    function displayPosts(posts) {
        postsContainer.innerHTML = '';
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
    
    function addNewPost(title, body) {
        const newPost = {
            title: title,
            body: body,
            id: Date.now() 
        };
        
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${newPost.title}</h3>
            <p>${newPost.body}</p>
        `;
        
        // Add new post at the top
        postsContainer.insertBefore(postElement, postsContainer.firstChild);
    }
});