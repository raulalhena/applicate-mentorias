import { createContext } from "react";
import { User } from "../interfaces/User";

export const AuthContext = createContext<User | undefined>(undefined);