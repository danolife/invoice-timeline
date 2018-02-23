const resolvers = {
  Query: {
    user: () => ({
      name: "John Doe",
      profilePicture: "https://api.adorable.io/avatars/1"
    })
  }
};

export default resolvers;
