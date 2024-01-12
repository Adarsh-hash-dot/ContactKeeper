import React from 'react';

const getRandomColor = (name) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
  const randomIndex = name.split(' ')[0].length % colors.length;
  console.log(randomIndex, name);
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