import {useState} from "react"
import { AuthContext } from "./Context"
 export default function AuthCtxt({ children }) {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}