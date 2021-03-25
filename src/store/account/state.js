export default function () {
    return {
      token: localStorage.getItem('token') || null,
      filter: 'all',
      todos: [],
      message: "",
      user : {
        id: 0,
        name: " ",
        email: " ",
        email_verified_at: null,
        created_at: " ",
        updated_at: " " },

    }
}
