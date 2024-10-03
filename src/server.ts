import Fastify from "fastify";
import { userRoutes } from "./routes/user.routes";
import { contactRoutes } from "./routes/contact.routes";

const app = Fastify();

app.register(userRoutes, {
    prefix: '/users',
});

app.register(contactRoutes, {
    prefix: '/contacts',
});

app.listen({ port: 3333 }, () => console.log("Server is running on port: 3333")
);
