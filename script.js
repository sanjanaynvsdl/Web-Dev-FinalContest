
document.querySelector('button').addEventListener('click', function() {
  var text = document.querySelector('textarea').value;
  
  if(text) {
    var post = document.createElement('div');
    post.className = 'feed-post';
    
    // Add avatar image
    var avatar = document.createElement('img');
    avatar.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739'; 
    avatar.alt = 'Avatar';
    post.appendChild(avatar);
    
    // Add post text
    var p = document.createElement('p');
    p.innerText = text;
    post.appendChild(p);


    //To edit the text
    // var editt=document.createElement('img');
    // editt.src='https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661';
    // editt.alt='texxxtt';
    // editt.ClassName='edit';
    // editt.addEventListener('click',function() {
    //     // p.innerText=text;
    // })
    // post.appendChild(editt);
    var editt=document.createElement('img');
    editt.src='https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661';
    editt.alt='texxxtt';
    editt.className='edit';
    editt.addEventListener('click',function() {
        // Get the paragraph element that contains the post content
        var p = this.parentNode.querySelector('p');

        // Create a textarea element to edit the post content
        var textarea = document.createElement('textarea');
        textarea.value = p.innerText;

        // Replace the paragraph with the textarea
        p.parentNode.replaceChild(textarea, p);

        // Create a save button to save the changes
        var saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        

        // Add an event listener to the save button
        saveButton.addEventListener('click', function() {
            // Get the new text from the textarea
            var newText = textarea.value;

            // Create a new paragraph element with the new text
            var newP = document.createElement('p');
            newP.innerText = newText;

            // Replace the textarea with the new paragraph
            textarea.parentNode.replaceChild(newP, textarea);

            // Remove the save button
            saveButton.remove();
        });

        // Append the save button to the post
        this.parentNode.appendChild(saveButton);
})
post.appendChild(editt);

//Like-Functionality:
        var like=document.createElement('img');
        like.src='https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
        like.alt='texxxtt';
        like.ClassName='likee';
        // post.appendChild(like);
    // Add an event listener to the like image
    like.addEventListener('click', function() {
        // Check the current source of the like image
        if (like.src == 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679') {
        // If it is the default image, change it to the liked image
        like.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
        } else {
        // If it is the liked image, change it back to the default image
        like.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
        }
    });
    post.appendChild(like);

    var comment=document.createElement('img');
    comment.src='https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619';
    comment.alt='texxxtt';
    comment.ClassName='commentt';
    post.appendChild(comment);

    // Add delete button
    var deleteButton = document.createElement('img');
    deleteButton.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643';
    deleteButton.alt='delete-img';
    // deleteButton.innerHTML = '×'; // This is the HTML code for the cross symbol
    deleteButton.addEventListener('click', function() {
    // Remove the post from the feed
    post.remove();
    });
    post.appendChild(deleteButton);

    document.getElementById('feed').appendChild(post);
    // Clear textarea
    document.querySelector('textarea').value = '';
    document.querySelector('.counter').innerText = '0 / 100';
  }
});









