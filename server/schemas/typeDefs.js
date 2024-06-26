const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        goals: [Goal]!
        posts: [Post]!
        friends: [User]!
    }

    type Goal {
        _id: ID
        goalTitle: String
        username: String
        category: String
        completed: Boolean
        frequency: String
        flowerType: String
        createdAt: String
        endDate: String
        activities: [Activity]!
        activityLevel: Int
    }

    type Activity {
        _id: ID!
        activityText: String
        username: String
        createdAt: String
    }

    type Post {
        _id: ID
        postText: String
        username: String
        createdAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID!
        commentText: String
        username: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        goals(username: String!): [Goal]
        goal(goalId: ID!): Goal
        posts(username: String!): [Post]
        post(postId: ID!): Post
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addGoal(goalTitle: String!, category: String!, frequency: String!, flowerType: String, endDate: String): Goal
        addActivity(goalId: ID!, activityText: String!): Goal
        addPost(postText: String!): Post
        addComment(postId: ID!, commentText: String!): Post
        addFriend(friendId: ID!): User
        removeGoal(goalId: ID!): Goal
        removeActivity(goalId: ID!, activityId: ID!): Goal
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        removeFriend(friendID: ID!): User
        updateGoal(goalId: ID!, updatedGoal: String!): Goal
    }
`;

module.exports = typeDefs