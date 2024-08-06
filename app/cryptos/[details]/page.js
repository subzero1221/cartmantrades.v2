import CryptoDetails from "./../../_components/cryptoDetails";

async function Details({ params }) {
  const name = params.details;
  const res = await fetch(
    `https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${name}`
  );
  const data = await res.json();
  return (
    <div className="py-2">
      <CryptoDetails data={data} />
    </div>
  );
}

export default Details;
