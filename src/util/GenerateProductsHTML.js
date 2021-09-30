import BlockPrice from "../components_strings/BlockPrice";
import Page from "../components_strings/Page";
import Row from "../components_strings/Row";

const GenerateProductsHTML = ({ product, amount, price, logoURI }) => {
  let html = '';

  const block = BlockPrice({
    logoURI: logoURI,
    title: product.title,
    price: price,
  });

  for (let i = 0; i < Math.floor(amount / 3); i++) {
    html = `${html} ${Row({ children: `${block}${block}${block}` })}`
  }

  if (amount % 3 > 0) {
    let auxHtml = '';
    for (let i = 0; i < amount % 3; i++) {
      auxHtml = `${auxHtml} ${block}`;
    }
    html = `${html} ${Row({ children: auxHtml })}`
  }

  return Page({ children: html });
};

export default GenerateProductsHTML;