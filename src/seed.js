// NOTE: replace the all the userIds with your Firebase auth user id (can be taken from Firebase Authentication)

export function seedDatabase(firebase) {
  const users = [
    {
      userId: "3XeI0msdYBUqAfuQdOHQ7ILS2mF2",
      username: "dean",
      fullName: "Dean Hansen",
      emailAddress: "deanhansen@gmail.com",
      following: [],
      followers: [],
      dateCreated: Date.now(),
    },
    {
      userId: "jPsGd1AaKPU0Xu7ux666CTdokJI2",
      username: "jakub",
      fullName: "Jakub Flynn",
      emailAddress: "jakubflynn@gmail.com",
      following: [],
      followers: [],
      dateCreated: Date.now(),
    },
    {
      userId: "BVtJ6da07Wazog48bF418ZUZEki2",
      username: "erik",
      fullName: "Erik Dean",
      emailAddress: "erikdean@gmail.com",
      following: [],
      followers: [],
      dateCreated: Date.now(),
    },
    {
      userId: "hrA5hfcXyscWikdhGI4gXH5nNmI2",
      username: "katelyn",
      fullName: "Katelyn Rangel",
      emailAddress: "katelynrangel@gmail.com",
      following: [],
      followers: [],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "BVtJ6da07Wazog48bF418ZUZEki2",
        imageSrc: `/images/users/erik/${i}.jpg`,
        caption: "Just a cool photo.",
        likes: [],
        comments: [
          {
            displayName: "Katelyn",
            comment: "Great Image",
          },
          {
            displayName: "Jakub",
            comment: "I love this photo Erik",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
