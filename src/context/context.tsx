import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { dishT } from "../utils/types";
import { descriptionT } from "../hooks/types";

interface AuthContextType {
    dish: dishT;
    setDish: React.Dispatch<React.SetStateAction<dishT>>;
    imageUrl: string | null;
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
    collection: (dishT | null)[];
    setCollection: React.Dispatch<React.SetStateAction<(dishT | null)[]>>;
    description: descriptionT | null;
    setDescription: React.Dispatch<React.SetStateAction<descriptionT | null>>;
    startGenerate: boolean,
    setStartGenerate: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
    dish: { name: "", description: "", date: new Date(), imageUrl: "" },
    setDish: () => {},
    imageUrl: null,
    setImageUrl: () => {},
    collection: [],
    setCollection: () => {},
    description: null,
    setDescription: () => {},
    startGenerate: false,
    setStartGenerate: () => {}
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dish, setDish] = useState<dishT>({ name: "", description: "", date: new Date(), imageUrl: "" });
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [collection, setCollection] = useState<(dishT | null)[]>([]);
    const [description, setDescription] = useState<descriptionT | null>(null);
    const [startGenerate, setStartGenerate] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ dish, setDish, imageUrl, setImageUrl, collection, setCollection, description, setDescription, startGenerate, setStartGenerate }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
