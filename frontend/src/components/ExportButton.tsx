import React, { useState } from "react";
import "./ExportButton.css";

interface ExportButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onClick, disabled }) => {
    const [progress, setProgress] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleExport = async () => {
        setIsDownloading(true);
        setProgress(0);

        // Simulating a delay for demonstration purposes
        const totalProgressSteps = 100;
        for (let step = 1; step <= totalProgressSteps; step++) {
            await delay(10);
            const progressPercentage = (step / totalProgressSteps) * 100;
            setProgress(progressPercentage);
        }

        setIsDownloading(false);
        setProgress(0);

        onClick();
    };

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    return (
        <div className="exportButtonContainer">
            <div className="progressBarContainer">
                {isDownloading && <div className="progressBar" style={{ "--progress": `${progress}%` } as React.CSSProperties}></div>}
            </div>
            <button className="exportButton" onClick={handleExport} disabled={disabled || isDownloading}>
                {isDownloading ? "Exporting..." : "Export Results"}
            </button>
        </div>
    );
};

export default ExportButton;
