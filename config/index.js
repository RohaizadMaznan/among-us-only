const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:4000/api' : 'https://amongusonly-app.herokuapp.com/api';