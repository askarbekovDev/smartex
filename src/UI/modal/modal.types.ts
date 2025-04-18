import { ReactNode } from "react";

export interface IModalProps {
    feedbackOpen: boolean;
    setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}