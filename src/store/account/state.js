export default function () {
    return {
      token: localStorage.getItem('token') || null,
      filter: 'all',
      todos: [],
<<<<<<< HEAD
      message: "",
      user : {
        id: 0,
        name: " ",
        email: " ",
        email_verified_at: null,
        created_at: " ",
        updated_at: " " },

=======
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
    }
}
