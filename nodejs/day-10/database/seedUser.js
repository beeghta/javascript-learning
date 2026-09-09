import bcrypt from "bcrypt";

import {
    createUser
} from "./userDatabase.js";

const passwordHash = await bcrypt.hash(
    "1234",
    10
);

const user = createUser(
    "admin",
    passwordHash,
    "admin"
);

console.log(user);