import React, { useState } from "react";

interface VersionRangeProps {
    fromVersion: any
    toVersion: any
}

function VersionRange(functions: VersionRangeProps) {
    const [fromVersion, setFromVersion] = useState('');
    const [toVersion, setToVersion] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    return (
        <div>
            <label>
                From:
                <input
                    type = "text"
                    placeholder="Version"
                    onChange={(e) => handleChange(e, functions.fromVersion)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")     
                            console.log("hello")
                        }
                    }
                    value={fromVersion}
                />
            </label>
            <label>
                To:
                <input
                    type = "text"
                    placeholder="Version"
                    onChange={(e) => handleChange(e, functions.toVersion)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")     
                            console.log("hello")
                        }
                    }
                    value={toVersion}
                />
            </label>
        </div>
    );
};

export default VersionRange;