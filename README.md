# BearChat-site
BearChat: a cute, bear-themed instant messaging website
-------------------------------------------------------
What it does: Allows for users to sign up, login, and logout while sending messages to other registered users.
The website implements visible real-time online statuses through Socket.IO. I added cute, randomly generated emoticons
next to conversations in the side bar. There is a search bar that allows users to search for the name of a user they would like
message.

I added comments to files as well as writing this document. 

How to run from vscode: go to root file. npm run build -> npm start

Potential Bug: Messages appearing on wrong side of sender/receiver. If this happens, a page refresh should fix it. I'm looking for
a permanent solution. (I think its actually fixed though, now?)

The notification sound I ultimately left unincorporated. I thought it might be a nuisance for people listening
to other things like a song but I might add it for real in the future. I'd also like to add profile picture variety and freedom
in the future. Photo upload also sounds like a good future feature.

Languages/technologies used: Javascript, React.js, MongoDB, Node.js, Express.js, Postman, Socket.IO, Tailwind css

Description of Files
> Backend 
  > Controllers
     auth.controllers.js
Imported bcrypt to hash and salt password. the signup function is an async function because the bcrypt salting, finding a preexisting username. and new user saving are asynchronous and the program does not have to wait for them to be done, especially if there should be an error thrown out. The signup function begins with a try catch that makes fullName, username, password, confirmedPass, and gender become an object that is the body of the request. A comparison is made between the password first typed in and the redo for the confirmation. If they don't match, an error stating that they don't is returned. A user variable is made equivalent to finding a username that already exists in our database collection. If the User exists, an error is returned saying that the username already exists, and the client will not be able to move forward with signing up. 
	I make a const salt variable and set it to a random salt after ten rounds. I chose extra rounds for some more security. Generating the salt is asynchronous because it is a computationally expensive process and I do not want it to block the main
execution. Right after this, I make a hashedPassword variable that uses the crypt hashing function with the user typed password and the salt we just made. It is asynchronous for similar reasons to the salt generator. I used a bear profile picture website for the profile pictures but so it is only giving one picture for all genders so I am looking to upgrade that in the future.
	A new user consists of fullName, username, password, gender, and profilepic. If there is a new user we make a JWT and set it as a cookie so the user can remain logged in by sending the token w later requests. The user is saved to the database. res.status(201) means that the resource was successfully created. If there is an error then an error is given saying invalid user data. The login function is similar where it is async and the request body being username and password only this time. The program finds if there is a matching username in the database and compares the typed password to the saved user pass. If one or both are wrong an error is given saying invalid user or pass. If no error, a token and cookie are set and a status of 200 is returned. In the logout function, it is not async because there are no promises. The cookie is cleared and the use is logged out. If there is an error a 500 error is given.
	
	message.controllers.js
Async sendmessages function. Destructuring is used to extract properties within the curly braces and for the id, it is renamed to recieverId. req.body for sending data in the body of a req for submitting messages. req.params for accessing parameters in a route path. req.user for authentication. the program finds a conversation using findOne and makes the participants an array of the senderid and the receiverid. if there is no conversation yet then create conversation with the same array style. 
	A new message contains the properties of senderid, receiverid, and the text message. We then add the newmessage id into a conversation object by the messages property it contains within. It is added into an array. I used a promise.all function for both saving the conversation and newMessages since saving new data to a database can take time and I wanted the saving to be time efficient for the rest of the program.
	GetMessages is async because we will have to use the findOne function and we don't want the rest of the function, to get held up, especially if it ends up throwing an error anyway. We make the set the id as the request params and rename it to userToChatId. When we get the messages we set the conversation's participants to the senderId and receiverId in an array. We then use the populate function on that conversation with messages so that when a client opens a conversation, the messages will be there and can be used to be displayed on the frontend. If successful the program give sus a json object with the payload being the messages of the conversation.

	user.controllers.js
This is used for getting susers to be recorded for the displayed sidebar. We get the variable of the loggedinUser id because we do not want to current logged in user to see themselves on the side bar of users. We then return a JSON object of the filtered users.

   > middleware
	protectroutes.js
This file is used to make sure that no unauthenticated users have access to routes and pages they should not be allowed to see. The protectRoute function contains incoming request data, responce data, and a next function which when called will pass control to the next route handler. The JWT is exitracted from the cookies. If theres not a token then the client returns a 401 error. The program then browses through the list fo registered users by userId. If the user does not exist a 404 error is given. Next() signals that the current middleware has completed its job.

   > models
	conversation.model.js
Implements mongoose schema. The conversation contains both participants of ref user and messages of ref message. I also enabled timestamps. Conversation object created.

	messages.model.js
	Mongoose. a message contains senderId, receiverId (both users) and message which is a string. all of them are required. timestamps are enabled. a Message object is then created w this mongoose schema.

	user.model.js
	Mongoose. contains fullName, username, password, gender and profilepic. all of type string and all required. User is created form this schema.

   > routes
	auth.routes.js
Routers from express are key here. We map to urls ending in /signup, /login, and /logout. Whatever end point is being used, the route will respond to POST requests sent to it. If we are on website.com/login, the website will display and use the login function from our auth controller.

	messages.routes.js
Once again using routers. Router.get uses the path /:id just as a placeholder for different and dynamic message ids. We run protectroute before getting to the getMessages function because we want to make sure the person accessing the messages is authenticated. If ilt works we get to the getMessages func and it will run the logic to respond to the get request. sendMessage is basically the same except that it is a post request because when a user sends the a message we will have to update our database.

	user.routes.js
router just for getting messages for the sidebar. ran protectRoutes before it just to make sure the client viewing is authenticated.

   > utils
	generateToken.js
importing a JWT. the function paorameters include the user for whom the token will be generated and the Express response used to set the cookie. the payload for the token is userId. I saved the secret token in the ENV file. The token lasts for 15 days and if it expire the user can reauthenticate by logging in again. The maxage in milliseconds is equivalent to 15 days. http only ensures that the cookie is accessible only thru http(s) and not javascript from the client side, protecting from xss attacks. Cookies are only sent for same-site requests. The secure line means that cookies will be safe when the website is deployed but not in development just in case I want to debug with the cookie. Export.
	
	junk.js 
I tried to delete this empty file but the device I made the code on is too slow to delete files so I left it. I could remove it possibly after I upload to git and deploy.

--

	server.js
Import several functions from other backend files to implement into the app. 

> DB
	connecttoMongoDB
Connects to the MongoDB URI from the ENV file. Use MongoDB for data collection that can be used for both the frontend and backend

> Frontend

   > public
	Tried to find a good background for the website. There are multiple because the device I used was too slow to delete the extras. 

   > src
	> assets
		I wanted to implement a sound but backed out on it because I could not find one I liked, I could add it later, though.
        > components
	> messages
	Message.jsx
Gives instructions for displaying a single message in the message container. This includes determining should appear from the sender/receiver side, color depending on which side it would be on, and the time stamp from implementing the extract time function I made which I'll mention later. 
	messageContainer.jsx 
Formatting the box in which the messages appear in, which is next to the sidebar of conversations. Implemented a cleanup function for logging out so when a user logs in again it gives them no conversation selected. If no chat/conversation is selected it gives them a welcome message. Otherwise displays the messages of the conversation and message input box.
	MessageInput.jsx
	File that displays a box for users to type messages. Includes prevent default to not refresh on send and features a send icon that changes into a loading circle when a message is in the process of being sent. If no message is typed nothing is sent even if the user hits the send icon.
	Messages.jsx
Gives instructions for displaying the array of messages in a certain conversation in the message container. Uses the usegetmessages function to get the messages from the database so that they aren't not displayed. Has a scroll bar for long conversations. I marked the last message in the array so the scroll functionality goes to the bottom (the most recent). When the conversation is loading in, I display 3 message skeletons for aesthetic purposes. When there aren't messages in a conversation yet, text says "Start the conversation"
	> sidebar
	Conversation.jsx
Makes the selected conversation from the sidebar the conversation that will be viewed and interacted with. Uses socket.io to display a green online bubble if the user from the conversation is online. The conversation includes the full name of the user and a randomly generated emoticon from the list of emoticons I picked out in another file. There are also dividers between each conversation to keep it neat.
	Conversations.jsx
Implements the get conversations hook. The multiple single conversations are put into a conversations map. A unique key is given to each conversation. The current conversation is passed as a prop, a random emojiemoticon is generated, and a Boolean detecting the last conversation is detected to avoid using an extra divider after the last conversation. Loading spinning is used if data is not loaded yet.
	Logout.jsx
Uses a custom hook to create an object with loading and logout properties. I imported a react ion for the logout button, and when it is clicked by the user then the user is logged out, which comes from the imported useLogout function. Loading symbol if the process takea a bit of time. 
	Searchbar.jsx
The box on top of the conversations that allows users to search for a user by their full name. When there is a hit of at least 3 characters, the match will becomes the selected conversation. It scans through the conversations by still using get Conversations. I allowed for no case sensitivity to make searching simpler. If no match comes up, react hot toast gives an error popup saying no user was found. For the design of the searchbar, I imported a react icon and had the placeholder text say "Search...". IK put the React icon inside of a button that triggers the search algorithm on click.
	sidebar.jsx
This file combines Searchbar, Conversations, and LogoutButton into the whole sidebar by importing them from their files.
	
	> skeletons
	messageSkeleton.jsx
This file purely uses DaisyUI to show a display-only message skeleton for the loading time before messages load into the message container. The skeletons are rounded, shine, and are white.

	> context
	AuthContext.jsx
A function AuthContextprovider provides authentication state to its children components. This file used to access and authentication states throughout the React application.
	SocketContext.jsx
This files creates a context for using Socket.IO in other parts of the React application. The Socket creates new WebSocket connection at the website. There is a listener for getting online users and there is a cleanup function to close the website connection and reset the Socket state when the user goes offline.
	
	> hooks
	useGetConversation.js
The file retrieves conversations from the database. If the response successfully collects data, the conversations are set to that data. 
	useGetMessages.js
The file fetches message data from the server from a specific conversation id. If the response successfully gets data, the messages are set as that data. If the current selectedConversation is not null, then the getMessages function is called.
	useListenMessages.js
Unincorporated sound notification, so this file isn't really much of use yet.
	useLogin.js
Sends a POST request to the server when a user logins in with their username and password. If successful, data is set to the response of the post request. The users info is also saved in local storage so if they leave the website but do not log out they do not have to log in again. The auth user is also set to that data.
	useLogout.js
Sends a POST request to the serve when a user logs out. If the response is successful the data is set to the response and the user is removed from local storage and the authenticated user is set to null. If error, then return error message.
	useSendMessage.js
File that allows messages to be sent. Uses POST request to send the message to the server. If the response is valid then the data is put into an array of the preexisting messages to combine them. If it doesn't go through, show error message. The loading state is set to false to indicate that the sendMessage function is in the process of sending a message to the server.
	useSignup.js
I made a separate function to check for input errors, such as missing field, password being too short, etc. I then call this function at the top of my main signuo function and if there are any errors the signup function does not go on. The set loading state is set to true if there are no errors because w begin the process of sending the signup info to the server. We use a POST request because we send the server new info. We save the info in local storage so if someone signs ups and leaves them site without signing out they can stay signed in. After either the try or catch we set the loading state to false.
	
  > page
    > home
	home.jsx
Combines sidebar and message container to completely create the home page after signing in or logging in. 
	login.jsx
Login page with two boxes to type in username and password. There is an option to make your password visible if you want to double check what you've typed. There's a button to submit. If someone wants to sign up, there is hyperlinked text that when clicked, redirects to the sign up page. When the sign up button is pressed a loading spinner appears.
	> signup
	gender.jsx
The gender checkbox component from the sign up page. Consists of DaisyUI/CSS. There are options for male, female, and other.
	signup.jsx
Sign up page for new users. The inputs consist of full name, username, password, confirmed password, and the gender (checkbox). The inputs except for the gender are in text boxes with placeholder text in them. If someone already haves an account, they can easily access the login page by clicking the hyperlinked text that says "Already have an account? Login". There is a button to submit the form and a loading spinner appears in place of the text inside of it when the server processes the click event.
 
  > utils
	emojis.js
List of emoticons I picked to be randomly used and placed on the right of each conversation in the sidebar.
	extractTime.js
Function used to record the timestamp of when messages are sent out. Made sure that there are just hours and minutes. In 24-hour time style.

  > zustand
	useConversation.js
This file creates a custom hook to be used in different files across the program using Zustand. This hook manages the states related to conversations, including the selected convo and messages.
 ---
App.jsx
Includes all routes to logging in, logging out, and home. All of the routes are also wrapped inside of React Hot Toast so that Toast can be used in all of the routes/where they lead to. The authuser state is used to determine redirects when needed, such as not allowing an non authenticated user to access the home page.

index.css
This is where I put the background image that is visible on all pages.

main.jsx
Sets up root of React App and turns it into HTML element. The app is wrapped by socket context, which is wrapped by auth context, wrapped by browser router, which is finally wrapped by React strict mode.

eslintrc.cjs
Extends recommended rules for JS and React, sets the React version, configures parser options, specifies environment, etc. Mostly used to identify and fix problems in JS code.

index.html
Template for vite + React app.

package-lock.json
File automatically created by NPM when installing dependencies. Ensures that dependency tree is consistent. Records exact versions of packages installed.

package.json
Contains dependency info, scripts, etc.

tailwind.config.js
I added the daisyUI plugin here.

vite.config.js
Configuration file for Vite. Uses React plugin. I set up a proxy for API requests during development to my local host.

.env
This is where I put my PORT, MongoDB Uri, JWT secret code, and my node environment.
