import React from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";
import ExportButton from "./ExportButton";

interface ResultsBoxProps {
    searchResults: any[][];
}

function ResultsBox(props: ResultsBoxProps) {
    let resultsCount: number = props.searchResults.length;

    const handleExport = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split("T")[0];
        const formattedTime = currentDate.toTimeString().split(" ")[0].replace(/:/g, "-");

        // Convert searchResults to CSV format
        const csvData = convertToCSV(props.searchResults);
        const blob = new Blob([csvData], { type: 'text/csv' });

        // Create a download link and trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `results_${formattedDate}_${formattedTime}.csv`;
        downloadLink.click();
    };

    const convertToCSV = (data: any[][]) => {
        // Convert your search results data to CSV format
        // Implement your custom logic here to format the data as CSV
        // Example: Convert array of arrays to CSV format
        const csvRows = data.map((row) => row.join(','));
        return csvRows.join('\n');
    };

    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                <div className="resultsBorderHeader">
                    {resultsCount > 0 ?
                        (<h3> {resultsCount} Projects Found </h3>)
                        :
                        (<h3> No Projects Found </h3>)}
                    <ExportButton onClick={handleExport} disabled={resultsCount === 0} />
                </div>
                <div className="resultsPanel">
                    <div>
                        {props.searchResults.map((innerArray, index) => (
                            <div key={index}>
                                <SearchResult
                                    key={index}
                                    projectName={innerArray[0]}
                                    dependency={innerArray[1]}
                                    version={innerArray[2]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsBox;