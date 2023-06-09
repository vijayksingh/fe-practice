export const data = {
  id: 1,
  author: "John",
  content: "This is the main comment",
  timestamp: "2023-06-09T12:34:56Z",
  avatarUrl: "https://picsum.photos/500/500",
  replies: [
    {
      id: 2,
      author: "Jane",
      content: "This is a reply",
      timestamp: "2023-06-09T12:35:00Z",
      avatarUrl: "https://picsum.photos/50/50",
      replies: [],
    },
    {
      id: 3,
      author: "Bob",
      content: "Another reply",
      timestamp: "2023-06-09T12:35:30Z",
      avatarUrl: "https://picsum.photos/50/50",
      replies: [
        {
          id: 4,
          author: "Alice",
          content: "Nested reply",
          timestamp: "2023-06-09T12:35:40Z",
          avatarUrl: "https://picsum.photos/50/50",
          replies: [],
        },
      ],
    },
  ],
};
