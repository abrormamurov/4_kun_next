type ParamsInterface = {
  params: {
    id: number;
  };
};
const request = async (id: number) => {
  try {
    const req = await fetch(`https://dummyjson.com/products/${id}`);

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    const data = await req.json();
    return data;
  } catch (error) {
    console.error("Error fetching the data:", error);
    return 1;
  }
};

async function SingaleProduct(params: ParamsInterface) {
  const product = await request(params.params.id);
  console.log(product);
  return (
    <div>
      SingaleProduct - {params.params.id}
      <img
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
    </div>
  );
}

export default SingaleProduct;
