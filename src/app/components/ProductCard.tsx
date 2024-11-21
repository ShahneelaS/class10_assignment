import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/Bag1.jpg"
                        alt="Product One"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 2,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/Bag2.jpg"
                        alt="Product Two"
                        width={500}
                        height={500}
                    />
                </div>
                <p className="text-center pt-10">PKR 3,500</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/Bag3.jpg"
                        alt="Product Three"
                        width={400}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 4,200</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
