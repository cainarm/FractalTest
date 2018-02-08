import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListRow = ({content, onClick, ...props}) => {
    return (
        <div 
            onClick={onClick}
            className="listRow"
            {...props}
        >
            <a>{content}</a>
        </div>
    );
};

ListRow.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string.isRequired
};

export default ListRow;