# Keyword Managemnt using React with GraphQL Server


## Added Front End
front end is created by using 
npx create-react-app frontend



# Steps to run the application

To run the application locally, you have to start both server and frontend application:
1. Navigate to the `api` folder in the terminal and start the server: `npm run start`
2. (Open `localhost:4000` in the browser to test the GraphQL API)
3. In a different terminal navigate to the `frontend` folder and run it as well.
4. Open `localhost:3000 in a browser to see the frontend application.


###Technical Description

Front End 

1. Created separate component to Add Category, Delete Category, Add Keyword ,Delete Keyword and Category List.
2. Used dependency of apollo-boost forgql query and to create client in order to connect with api . us
3. Also used react-apollo in order to use higher order component for provider , graphql and componsing queries.
4. All components are functional components and used react hooks useState in order to manage the state within it.
5. Used Bootstrap for css handling.


Back End
1. Used graphql-server-express and body parser to create server and end Point.
2. Created schema and resolver file in order to handle add ,delete and get query towards api.
3. Created Mock data within categories file and updating it in resolver in order to update the BE. (couldn't use DB. here).

Note : At the moment there is some problem is going on in deploy will host it once it is fixed and will share the live url on it.
