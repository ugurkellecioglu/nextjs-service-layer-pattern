This repo is for demonstrating how you can implement service layer pattern in your next js apps.

By using service layer pattern you can easily separate UI and your logic in your next app.

Basically, you'll have a services folder where you create your services and create a new class instance from it. i.e. `UsersService`

Functions that are in service files responsible for making api calls and return data or error.

Then, you'll have a `hooks` folder where you create corresponding hook files by looking at your services. i.e. `useUser.ts`

in these files, you should use react-query to use your service and get data states and return needed fields. i.e. `data, status`

then you can use that hook any component you like. 

in just one line of code, you'll get the data in your component.

You can also make server side fetching by only using the services you created.

[youtube video](https://www.youtube.com/watch?v=rwTRD-p-rog)

