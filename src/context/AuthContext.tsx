import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface UserType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface AuthUserContextType {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;

}

export const AuthUserContextData = createContext<AuthUserContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return (
        <AuthUserContextData.Provider value={{ user, setUser }}>
            {children}
        </AuthUserContextData.Provider>
    );
};




export default AuthProvider;
export const useAuth = () => {
    const context = useContext(AuthUserContextData);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
