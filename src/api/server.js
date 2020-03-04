const uuid = require("uuid").v4;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/users.json");
const middlewares = jsonServer.defaults();

const refreshUsers = () => {
    const usersAdapter = new FileSync('db/users.json');
    return low(usersAdapter);
};

const refreshTokens = () => {
    const tokensAdapter = new FileSync('db/tokens.json');
    return low(tokensAdapter);
};

const addToken = username => {
    const tokens = refreshTokens();
    const token = uuid();
    tokens.get("auth").push({
        username,
        token
    }).write();
    return token;
};

const isAuthorized = token => {
    if (!token) {
        return false;
    } else {
        const tokens = refreshTokens();
        if (tokens.get("auth").find({token}).value()) {
            return true;
        } else {
            return false;
        };
    }
};

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (["/users", "/users/"].includes(req.originalUrl)) {
        if (req.method === "POST") {
            addToken(req.body.username);
            next();
        } else {
            res.sendStatus(403);
        }
    } else if (req.method === "POST" && ["/login", "/login/"].includes(req.originalUrl)) {
        next();
    } else if (isAuthorized(req.header("Authorization"))) {
        next();
    } else {
        res.sendStatus(401);
    }
});

server.post("/login", (req, res) => {
    const users = refreshUsers();
    const user = users.get("users").find({
        username: req.body.username,
        password: req.body.password
    }).value();
    if (user) {
        const tokens = refreshTokens();
        const data = tokens.get("auth").find({username: req.body.username}).value();
        if (data) {
            res.send({
                id: user.id,
                token: data.token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

server.use(router);
server.listen(3000, () => {
    console.log("Server is up");
});