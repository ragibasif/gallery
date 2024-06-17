const Copyright = () => {
    // dynamically set copyright year
    const date = new Date();
    const year = date.getFullYear();
    const initialYear = 2024;
    const name = "Ragib Asif";

    const copyrightStyle = {
        fontFamily: "monospace, sans - serif",
        fontSize: "1rem",
    };

    // copyright years checker
    const displayYear = () => {
        if (year === initialYear) {
            return (
                <>
                    <p>
                        Copyright &copy; {year} {name}. All rights reserved.
                    </p>
                </>
            );
        } else {
            return (
                <>
                    <p>
                        Copyright &copy; {initialYear} - {year} {name}. All rights reserved.
                    </p>
                </>
            );
        }
    };

    return (
        <>
            <div style={copyrightStyle}>{displayYear()}</div>
        </>
    );
};

export default Copyright;
