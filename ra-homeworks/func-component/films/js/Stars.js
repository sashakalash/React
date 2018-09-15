'use strict';

function Stars({count}) {
  if ((count < 1 || count > 5) || typeof count !== 'number') {
    return null;
  }
  return <ul className="card-body-stars u-clearfix"><li><Star /></li></ul>;
}

Stars.defaultProps = {count: 0}