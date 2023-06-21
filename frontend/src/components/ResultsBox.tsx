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
        const columnHeaders = ['Project Name', 'Dependency', 'Version', 'PURL'];
        const csvRows = [columnHeaders.join(';')]; // Use semicolon as the delimiter for columns

        data.forEach((row) => {
            const csvRow = row.map((item) => `"${item}"`).join(';');
            csvRows.push(csvRow);
        });

        return csvRows.join('\n');
    };

    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                <div className="resultsBorderHeader">
                    {resultsCount > 0 ?
                        (<h3> {resultsCount} Instances Found </h3>)
                        :
                        (<h3> No Instances Found </h3>)}
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
                                    purl={innerArray[3]}
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