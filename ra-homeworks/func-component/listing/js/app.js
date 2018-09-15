'use strict';

const getShortTitle = title => {
  return `${title.slice(0, 49)}...`;
}

const getCorrectPrice = (currCode, price) => {
  return currCode === 'USD'? `$${price}` : 
      currCode === 'EUR'? `€${price}` : `${price} ${currCode}`;
}

const getQuantityClassName = quantity => {
  return quantity <= 10? 
    'item-quantity level-low' : 
      quantity> 10 && quantity <= 20? 'item-quantity level-medium' : 
        'item-quantity level-high';
}

const Listing = ({items}) => {
  if (items.length === 0) {
    return null;
  }
  const ItemsList = items.map(item => {
    const shortTitle = item.title.length > 50? getShortTitle(item.title) : item.title;
    const newPrice = getCorrectPrice(item.currency_code, item.price);
    const quantityClassName = getQuantityClassName(item.quantity);
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p clclassNameass="item-title">{shortTitle}</p>
          <p className="item-price">{newPrice}</p>
          <p className={quantityClassName}>{`${item.quantity} left`}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="item-list">{ItemsList}</div>
  )    
}

Listing.defaultProps = {items: []};


fetch('https://neto-api.herokuapp.com/etsy')
  .then(res => res.json())
  .then(res => {
    ReactDOM.render(
      <Listing items={res} />,
      document.getElementById('root')
    );
  })
  .catch(err => console.error(err))