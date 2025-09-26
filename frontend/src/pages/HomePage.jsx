import Header from "../components/Header";

export default function HomePage() {
    return (
        <>
            <Header />

            <section className="max-w-7xl mx-auto p-5 font-[inter]">
                <div className="mb-5 flex justify-between">
                    <h2 className="text-3xl font-bold">All Products</h2>

                    <div className="flex items-center gap-3">
                        <button className="bg-[#1414141a] text-sm py-2 px-3 font-semibold rounded-full">Sort: Featured</button>
                        <button className="bg-[#1414141a] text-sm py-2 px-3 font-semibold rounded-full">Price: Low to High</button>
                        <button className="bg-[#1414141a] text-sm py-2 px-3 font-semibold rounded-full">Color: Black</button>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-5">
                    <div>
                        <img src="/black-slimfit-tshirt.png" alt="" className="rounded-lg" />
                        <div className="flex justify-between py-2">
                            <p className="font-medium">Slim Fit Black T-Shirt</p>
                            <p className="font-semibold">Rp250.000</p>
                        </div>
                    </div>

                    <div>
                        <img src="/black-ankle-boots.png" alt="" className="rounded-lg" />
                        <div className="flex justify-between py-2">
                            <p className="font-medium">Black Ankle Boots</p>
                            <p className="font-semibold">Rp150.000</p>
                        </div>
                    </div>

                    <div>
                        <img src="/black-sweater.png" alt="" className="rounded-lg" />
                        <div className="flex justify-between py-2">
                            <p className="font-medium">Black Knit Sweater</p>
                            <p className="font-semibold">Rp350.000</p>
                        </div>
                    </div>

                    <div>
                        <img src="/black-cap.png" alt="" className="rounded-lg" />
                        <div className="flex justify-between py-2">
                            <p className="font-medium">Black Baseball Cap</p>
                            <p className="font-semibold">Rp80.000</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}