import React from 'react';
import AvailableOptions from "./options/AvailableOptions.jsx";
import SelectedOptions from "./options/SelectedOptions.jsx";

const TransferList = () => {
    return (
        <div className="transfer-list">
            <AvailableOptions title="Available Options" />
            <SelectedOptions title="Selected Options" />
        </div>
    );
};

export default TransferList;
