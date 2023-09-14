This an app that supports users to make posts and comments to them. 
The backend is built using: Node.js and Express.js.
Database: MongoDB
Frontend: React.js

In order to run the application locally:

1. Clone the application with the command
git clone https://github.com/TanyaGupta1901/kennect.git
2. Start a terminal and run these commands
-    cd server
-    npm i
-    nodemon index.js
3. Start a terminal
-    cd client
-    npm i
-    npm start
4. Start the local Mongodb server, and make sure your port is set to default 27017.

Here are some screenshots attached:-
Entry screen
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/adcf0d29-4ec6-40aa-9e73-6a2a0618d63f)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/65b347b9-d7a8-43b8-a04d-f61dcbe384e2)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/b95c5bc8-e07e-43c1-98e2-36b5282cd575)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/5213a176-6240-4e16-9b10-4eec25bcff44)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/d9950113-86ff-44fc-b834-43086c9e3292)


Here's a demo video: 
(https://drive.google.com/file/d/1x64xDjAL4l6OshhsEtmu25nQNY3aXfWo/view?usp=sharing)
<video src="/assets/demo.mp4" controls title="Title"></video>
Docker images
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/1855d580-3069-4181-9985-1dd3b853bfa4)



DB data
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/39444ad7-105c-42db-994a-8ba51f373a66)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/315dac72-c578-4f41-b0ba-f4cffe851d01)
![image](https://github.com/TanyaGupta1901/kennect/assets/63922082/2a12f9f4-f0c7-4baf-ba55-0d7d1cdc075b)

-A new user is created when a new username is entered, otherwise existing one is logged in.
-A user schema is designed to store the references to the posts created by the user.
-A post schema stores a reference to all its comments.
-A user can search for anything the post, or the comment in which the content is present that post is rendered.


