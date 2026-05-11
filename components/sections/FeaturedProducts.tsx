import Link from "next/link";

interface Product {
  name: string;
  description: string;
  slug: string;
}

const products: Product[] = [
  {
    name: "Ground Beef",
    description:
      "Our most versatile cut — perfect for burgers, chili, and everyday meals.",
    slug: "ground-beef",
  },
  {
    name: "Ribeye Steak",
    description:
      "Rich, well-marbled, and full of flavor. Our most popular premium cut.",
    slug: "ribeye-steak",
  },
  {
    name: "Beef Share (1/4 Cow)",
    description:
      "Stock your freezer with a curated selection of our best cuts.",
    slug: "beef-share-quarter",
  },
  {
    name: "Berkshire Pork",
    description:
      "Pasture-raised heritage pork with exceptional flavor and tenderness.",
    slug: "berkshire-pork",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Our Products
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Grass-fed, grain-finished Black Angus beef and pasture-raised
            Berkshire pork — raised right here in Wakefield, Virginia.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-square w-full bg-fanclare-tan flex items-center justify-center">
                <span className="text-fanclare-green/20 text-6xl font-black select-none">
                  FF
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <h3 className="text-lg font-bold text-fanclare-green">
                  {product.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-fanclare-green text-white text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto sm:self-start"
                >
                  Contact Us to Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
