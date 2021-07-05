import React from 'react';

export function Backspace(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M18.75 4C20.483 4 21.8992 5.35645 21.9949 7.06558L22 7.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H10.2488C9.48467 20 8.74732 19.7308 8.16441 19.2436L8.00936 19.1053L3.01367 14.3553C1.71288 13.1185 1.66102 11.0613 2.89784 9.76055L3.01367 9.64472L8.00936 4.89472C8.56313 4.36818 9.28296 4.05515 10.0412 4.00663L10.2488 4H18.75ZM11.4462 8.39705C11.1526 8.1792 10.7359 8.2034 10.4697 8.46967C10.2034 8.73594 10.1792 9.1526 10.397 9.44621L10.4697 9.53033L12.9391 12L10.4697 14.4697L10.397 14.5538C10.1792 14.8474 10.2034 15.2641 10.4697 15.5303C10.7359 15.7966 11.1526 15.8208 11.4462 15.6029L11.5303 15.5303L14.0001 13.061L16.4697 15.5303L16.5538 15.6029C16.8474 15.8208 17.2641 15.7966 17.5303 15.5303C17.7966 15.2641 17.8208 14.8474 17.6029 14.5538L17.5303 14.4697L15.0611 12L17.5303 9.53033L17.6029 9.44621C17.8208 9.1526 17.7966 8.73594 17.5303 8.46967C17.2641 8.2034 16.8474 8.1792 16.5538 8.39705L16.4697 8.46967L14.0001 10.939L11.5303 8.46967L11.4462 8.39705Z" />
    </svg>
  );
}
