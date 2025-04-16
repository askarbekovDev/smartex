import { ReactNode } from "react";

export interface IModalProps {
    title: string;
    feedbackOpen: boolean;
    setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}