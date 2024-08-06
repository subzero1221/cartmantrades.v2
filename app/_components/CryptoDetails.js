function CryptoDetails({ data }) {
  return (
    <div className="max-w-4xl p-2 mx-auto mt-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <img
            src={data?.Data?.LOGO_URL}
            alt="Logo"
            className="w-32 h-32 mx-auto rounded-full"
          />
        </div>
        <div className="mt-4 md:w-3/4 md:mt-0 md:pl-4">
          <h2 className="text-2xl font-bold">
            {data?.Data?.NAME} ({data?.Data?.SYMBOL})
          </h2>
          <p className="text-gray-500">
            {data?.Data.ASSET_DESCRIPTION_SNIPPET}
          </p>
          <div className="mt-3">
            <a
              href={data?.Data.WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Visit Website
            </a>
            {data?.Data.WHITE_PAPER_URL && (
              <a
                href={data?.Data.WHITE_PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500 hover:text-blue-600"
              >
                Whitepaper
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6 text-center md:grid-cols-3">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="font-semibold">Price</h3>
          <p>${data?.Data.PRICE_USD.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="font-semibold">Market Cap</h3>
          <p>${data?.Data.CIRCULATING_MKT_CAP_USD.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="font-semibold">Volume (24h)</h3>
          <p>
            ${data?.Data.SPOT_MOVING_24_HOUR_QUOTE_VOLUME_USD.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Description</h3>
        <p className="text-gray-700 whitespace-pre-line">
          {data?.Data.ASSET_DESCRIPTION}
        </p>
      </div>
    </div>
  );
}

export default CryptoDetails;
