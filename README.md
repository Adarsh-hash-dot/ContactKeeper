
# ContactKeeper

This application is Contact saving application. Currently It asummes that the user is loggedin this allows us to use the application

## Features

- Create : User is able create new contacts by clicking on "+" button
- Update : Edit the fields in contact
- Delete: Delete the contact
- View: Loads and views the contact



## Screenshots

[contacts-app.png](https://postimg.cc/rDY2XpVS)


## Demo

Youtube Video Link
[![Alt text](https://img.youtube.com/vi/dkXm6N2vKAc/0.jpg)](https://www.youtube.com/watch?v=dkXm6N2vKAc)


## Tech Stack

- **Client:** React.js, Pure CSS
- **Deployment:** gh-pages, github pages


## Lessons Learned

I have learned about useState, useEffect, state management, module CSS, props  passing.

- Generate colored profile picture

```javascript
import React from 'react';

const getRandomColor = (name) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
  const randomIndex = name.split(' ')[0].length % colors.length;
  return colors[randomIndex];
};

const ContactAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  const randomColor = getRandomColor(name);

  return (
    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${randomColor} text-white`}>
      {initials}
    </div>
  );
};

export default ContactAvatar;
}

```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
