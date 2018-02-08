import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListRow = ({content, tagline, onClick, ...props}) => {
    return (
        <div 
            onClick={onClick}
            className="listRow"
            {...props}
        >
            <a>{content}</a>
            <a>{tagline}</a>
        </div>
    );
};

ListRow.propTypes = {
    onClick: PropTypes.func,
    tagline: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default ListRow;