import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner  from './Spinner';
import PropTypes from 'prop-types';

const List = ({data, renderRow, loadFunc, hasMore, ...props}) => {
    return (
        <div {...props}>
            <InfiniteScroll
                pageStart={1}
                hasMore={hasMore}
                loadMore={loadFunc}
                loader={<Spinner />}
            >
                {
                    data.map(row => renderRow(row))
                }
            </InfiniteScroll>
        </div>
    );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderRow: PropTypes.func.isRequired,
  loadFunc: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired
};

export default List;