const url = "http://localhost:2025/";

async function find() {
    return fetch(url + "api/personalData", {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    }).then((response) => response.json());
}

async function findById(idData) {
    return fetch(url + "api/personalData/" + idData, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    }).then((response) =>
        response.json()
    );
}

async function create(data) {
    return fetch(url + "api/personalData/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

async function remove(idData) {
    return fetch(url + "api/personalData/" + idData, {
        method: "DELETE",
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    }).then((response) => response.json());
}

async function update(idData, data) {
    return fetch(url + "api/personalData/" + idData, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

export { find, findById, create, remove, update };
