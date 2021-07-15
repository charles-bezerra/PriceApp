const BlockPrice = ({
  logoURI,
  title,
  price,
}) => `
  <div class="block-price">
    <div class="icon-area">
      <img src="${logoURI}"/>
    </div>

    <div class="price-area">
      <div class="title">
        ${title}
      </div>
      <div class="price">
        <span>R$</span> ${price}
      </div>
    </div>
  </div>
`;

export default BlockPrice;
