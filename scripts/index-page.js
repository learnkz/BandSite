const commentData = [{
        title: "Connor Walton",
        date: "02/17/2021",
        content: ["This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."]
    },
    {
        title: "Emilie Beach",
        date: "01/09/2021",
        content: ["I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."]
    },
    {
        title: "Miles Acosta",
        date: "12/20/2020",
        content: ["I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."]
    }
]

const button = document.getElementById("new-comment-button");

if (button) {
    button.addEventListener("click", () => {
        console.log("click");


        let newTitle = document.querySelector("#enter-your-name");
        // let newDate = document.querySelector("#new-comment-date");
        let newDate = new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        let newContent = document.querySelector("#enter-your-comment");

        // console.log(newTitle.value);
        // console.log(newDate.value);
        // console.log(newContent.value);

        let parent = document.getElementById("comment-section");

        let commentPost = document.createElement('div');
        commentPost.classList.add("comment-post");

        let commentTitle = document.createElement("h2");
        commentTitle.classList.add("comment-title");
        commentTitle.innerText = newTitle.value;

        commentPost.append(commentTitle);

        let commentDate = document.createElement("h3");
        commentDate.classList.add("comment-date");
        commentDate.innerText = newDate;

        commentPost.append(commentDate);

        let commentContent = document.createElement("p");
        commentContent.classList.add("comment-content");
        commentContent.innerText = newContent.value;

        commentPost.append(commentContent);

        parent.append(commentPost);

    });
}

// Target parent of all comment posts
let parent = document.getElementById("comment-section");

//trying to build a create/add/innerText function
const buildElement = (i, type, className, objProperty, x) => {
    let commentEl = document.createElement(type);
    commentEl.classList.add(className);
    if (!x && x !== 0) {
        commentEl.innerText = commentData[i][objProperty];
    } else {
        commentEl.innerText = commentData[i][objProperty][x];
    }
    return commentEl
}



for (let x = 0; x < commentData.length; x++) {

    // Create individual comment post
    let commentPost = document.createElement('div');
    commentPost.classList.add("comment-post");



    // create comment title

    // let commentTitle = document.createElement("h2");
    // commentTitle.classList.add("comment-title");
    // commentTitle.innerText = commentData[x].title;

    // add title to post
    commentPost.append(buildElement(x, "h2", "comment-title", "title"));

    // create comment date
    // let commentDate = document.createElement("h3");
    // commentDate.classList.add("comment-date");
    // commentDate.innerText = commentData[x].date;

    // add title to post
    commentPost.append(buildElement(x, "h3", "comment-date", "date"));

    // JOINING, just FYI
    // console.log(commentData[0].content);

    // let contentArray = commentData[0].content;
    // let stringifiedArray = "<p>"+contentArray.join("</p><p>")+"</p>";

    // console.log(stringifiedArray);



    // Loop through content array to append each paragraph of comment post
    for (let i = 0; i < commentData[x].content.length; i++) {

        // create comment content
        // let commentP = document.createElement("p");
        // commentP.classList.add("comment-paragraph");
        // commentP.innerText = commentData[x].content[i];

        // add content to post
        commentPost.append(buildElement(x, "p", "comment-paragraph", "content", i));

    }

    // add post to parent
    parent.append(commentPost);
}