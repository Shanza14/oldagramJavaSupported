const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEL = document.getElementById("post-el")

document.body.onload = function() {
   
    for( let i = 0 ; i < posts.length ; i++ )
    {
        postEL.innerHTML += 
            `<div class="user-info">
                <img class="avatar user-avatar" id="avatar-el" src="${posts[i].avatar}">
                <div class="name-loc">
                    <p class="name" id="name-el">${posts[i].name}</p>
                    <p class="usr-loc" id="loc-el">${posts[i].location}</p>
                </div>
            </div>
             <img class="post-img" id="img-el" src="${posts[i].post}">
              <div class="bottom">
                 <div class="icons">
                        <img class="icon" id="heart" src="images/icon-heart.png">
                        <img class="icon"  id="comment" src="images/icon-comment.png">
                        <img class="icon"  id="dm" src="images/icon-dm.png">
                    </div>
                 <p class="likes" id="likes-el">${posts[i].likes} Likes</p>
                 <p class="comment" id="comment-el"> <span class="user-name" id="user-el">${posts[i].username}</span>${posts[i].comment}</p>
             </div>`
}}