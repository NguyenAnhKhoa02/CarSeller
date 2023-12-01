export const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        };

        return fetch('http://localhost:8080/login', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }

                localStorage.setItem("username", username);
                return Promise.resolve();
            })
            .catch(error => {
                localStorage.removeItem("username");
                return Promise.reject(error);
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem("username") ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};