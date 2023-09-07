'use client';

import React, { useEffect, useState, createContext, useContext } from 'react';

type ProjectIdContextProvider = {
    children: React.ReactNode;
};

type ProjectIdContextType = {
    projectId: string;
    setProjectIdValue: (value: string) => void;
};

const ProjectIdContext = createContext<ProjectIdContextType | null>(null);

export default function ProjectIdContextProvider({ children }: ProjectIdContextProvider) {
    const [projectId, setProjectId] = useState<string>('');

    const setProjectIdValue = (value: string) => {
        setProjectId(value);
    };

    return (
        <ProjectIdContext.Provider
            value={{
                projectId,
                setProjectIdValue,
            }}
        >
            {children}
        </ProjectIdContext.Provider>
    );
}

export function useProjectId() {
    const context = useContext(ProjectIdContext);

    if (context === null) {
        throw new Error('useProjectId must be used within a ProjectIdContextProvider');
    }

    return context;
}
