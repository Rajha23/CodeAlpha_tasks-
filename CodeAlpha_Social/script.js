let posts = [];

function addPost() {
    let content = document.getElementById("postContent").value;
    if (content === "") return;

    posts.push({ content, likes: 0 });
    document.getElementById("postContent").value = "";
    showPosts();
}

function likePost(index) {
    posts[index].likes++;
    showPosts();
}

function showPosts() {
    let postDiv = document.getElementById("posts");
    postDiv.innerHTML = "";

    posts.forEach((post, index) => {
        postDiv.innerHTML += `
            <div class="post">
                <p>${post.content}</p>
                <button onclick="likePost(${index})">Like (${post.likes})</button>
            </div>
        `;
    });
}
