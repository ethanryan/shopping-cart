import React from 'react';

export default function formatMoney(amount) {
  return (
    <div>
      <span className="dollarSign">$</span><span className="bigMoney">
        {amount}
      </span>
    </div>
  )
}
