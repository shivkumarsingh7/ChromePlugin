/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
// chrome.app.runtime.onLaunched.addListener(function() {
//   chrome.app.window.create('index.html', {
//     id: 'main',
//     bounds: { width: 620, height: 500 }
//   });

// });
 chrome.app.runtime.onLaunched.addListener(function() {
// chrome.notifications.create(
//     'name-for-notification',{   
//     type: 'basic', 
//     iconUrl: 'icon_128.png', 
//     title: "This is a notification", 
//     message: "hello there!" 
//     },

// function() {} 

// );

chrome.notifications.create(
    'name-for-notification',{   
    type: 'image', 
    iconUrl: 'icon_128.png', 
    title: "This is a notification", 
    message: "hello there!",
    imageUrl: "product.jpg"
    },

function() {} 

);

// chrome.notifications.create(
//     'name-for-notification',{   
//     type: 'list', 
//     iconUrl: 'icon_128.png', 
//     title: "This is a notification", 
//     message: "hello there!",
//     items: [{ title: "Item1", message: "This is item 1."},
//           { title: "Item2", message: "This is item 2."},
//           { title: "Item3", message: "This is item 3."}]
//     },

// function() {} 

// );
});