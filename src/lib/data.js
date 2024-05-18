const users = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
    { id: 3, name: 'Clementine Bauch' },
]

const posts = [
    {id: 1, title: 'Post 1', body: '.....', userId: 1},
    {id: 2, title: 'Post 2', body: '.....', userId: 2},
    {id: 3, title: 'Post 3', body: '.....', userId: 3},
]

export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    return posts.find((post) => post.id === parseInt(id));
}

export const getUser = async (id) => {
    return posts.find((user) => user.id === parseInt(id));
}