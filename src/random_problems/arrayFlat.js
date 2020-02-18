'use strict';

/* global $, jQuery */

function solution() {
    var allCommentListTags = document.querySelectorAll('.comment-list');
    allCommentListTags.forEach(function(commentListTag, index) {
        commentListTag.innerHTML = 'Loading...';
        fetch('https://www.example.com/comments?count=' + commentListTag.dataset.count).then(function (response) {
            return response.json();
          }).then(function (comments) {
            commentListTag.innerHTML = '';
            if (comments.length !== 0) {
                comments.forEach(function(comment) {
                                        console.log("DDSDSFDFSDSDF");

                    var commentItem = document.createElement('div');
                    commentItem.className = "comment-item";

                    var commentItemUsername = document.createElement('div');
                    commentItemUsername.className = "comment-item__username";
                    commentItemUsername.textContent = comment.username;
                    commentItem.appendChild(commentItemUsername);

                    var commentItemMessage = document.createElement('div');
                    commentItemMessage.className = "comment-item__message";
                    commentItemMessage.textContent = comment.message;
                    commentItem.appendChild(commentItemMessage);

                    commentListTag.appendChild(commentItem);
                    console.log("HELLO", commentListTag.childNodes.length);
                });
            }
        }).catch(function () {
            commentListTag.innerHTML = '';
        });
    });
}
