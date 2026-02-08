import axios from "axios";

const AEM_GRAPHQL_ENDPOINT = "/graphql/execute.json/genstudio/product-plp";

export const fetchPlpProductsFromAEM = async ({ category, segment }) => {
  const response = await axios.get(AEM_GRAPHQL_ENDPOINT, {
    params: {
      category,
      segment
    }
  });

  return response.data.data.productList.items;
};
