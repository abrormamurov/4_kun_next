import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();

  return data;
};

async function Home() {
  const data = await request("https://dummyjson.com/products");
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">
        {data.products.map(
          (item: {
            price: ReactNode;
            description: ReactNode;
            thumbnail: string | undefined;
            id: any;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => {
            return (
              <div key={item.id} className="align-element div-1">
                <div className="flex  flex-wrap	gap-10">
                  <Link href={`/product/${item.id}`}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 ">
                      <figure>
                        <img src={item.thumbnail} alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <h3 className="text-3xl font-bold">$ {item.price}</h3>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Add</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </h1>
    </div>
  );
}

export default Home;
