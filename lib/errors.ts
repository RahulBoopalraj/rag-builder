const unAuthenticated = Response.json({
    "status": "error",
    "title": "User Not Authenticated",
    "description": "You need to login to access this api"
}, {
    status: 401
});

export { unAuthenticated }