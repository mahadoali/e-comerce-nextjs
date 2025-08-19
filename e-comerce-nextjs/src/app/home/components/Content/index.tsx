"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/home/components/SideBar";
const categories = [
  { name: "Phones", icon: "/icons/phone.svg" },
  { name: "Computers", icon: "/icons/computer.svg" },
  { name: "SmartWatch", icon: "/icons/smartwatch.svg" },
  { name: "Camera", icon: "/icons/camera.svg" },
  { name: "HeadPhones", icon: "/icons/headphones.svg" },
  { name: "Gaming", icon: "/icons/gamepad.svg" },
];

const flashSales = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: "/images/Game.png",
    price: "120",
    oldPrice: "150",
    rating: 4,
    discount: 40,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "/images/keyboard.png",
    price: "950",
    oldPrice: "1180",
    rating: 4,
    discount: 35,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: "/images/Monitor.png",
    price: "370",
    oldPrice: "400",
    rating: 5,
    discount: 30,
  },
  {
    name: "S-Series Comfort Chair",
    image: "/images/chair.png",
    price: "375",
    oldPrice: "400",
    rating: 5,
    discount: 25,
  },
];

const bestSellers = [
  {
    name: "The north coat",
    image: "/images/Coat.png",
    price: "260",
    oldPrice: "310",
    rating: 5,
  },
  {
    name: "Gucci duffle bag",
    image: "/images/Bag.png",
    price: "930",
    oldPrice: "1100",
    rating: 4,
  },
  {
    name: "RGB liquid CPU Cooler",
    image: "/images/Cooler.png",
    price: "560",
    oldPrice: "670",
    rating: 5,
  },
  {
    name: "Small Bookshelf",
    image: "/images/shelf.png",
    price: "320",
    rating: 4,
  },
];
const exploreProducts = [
  {
    name: "Breed Dry Dog Food",
    image: "/images/Dogfood.png",
    price: "100",
    rating: 4,
  },
  {
    name: "CANON EOS DSLR camera",
    image: "/images/Canon.png",
    price: "360",
    rating: 5,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: "/images/Laptop.png",
    price: "700",
    rating: 5,
  },
  {
    name: "Curology product set",
    image: "/images/skinset.jpeg",
    price: "500",
    rating: 4,
  },
  {
    name: "Kids Electric Car",
    image: "/images/car.png",
    price: "950",
    rating: 5,
    newBadge: true,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "/images/soccercleats.jpeg",
    price: "1150",
    rating: 4,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: "/images/gamepad_usb.jpeg",
    price: "660",
    rating: 5,
    newBadge: true,
  },
  {
    name: "Quilted Satin Jacket",
    image: "/images/Jacket.png",
    price: "860",
    rating: 4,
  },
];
const newArrivals = [
  { name: "PlayStation 5", image: "/images/ps5.png" },
  { name: "Speakers", image: "/images/speaker.png" },
  { name: "Perfume", image: "/images/perfume.png" },
  { name: "Women's Collections", image: "/images/hatlady.png" },
];
const StarRating = () => (
  <div className="flex gap-1">
    <Image src="/icons/star.svg" alt="star" width={16} height={16} />
    <Image src="/icons/star.svg" alt="star" width={16} height={16} />
    <Image src="/icons/star.svg" alt="star" width={16} height={16} />
    <Image src="/icons/star.svg" alt="star" width={16} height={16} />
    <Image src="/icons/star-empty.svg" alt="star empty" width={16} height={16} />
  </div>
);

const HomePageContent = () => (
  <>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 px-4 mb-14">
      <aside className="w-full md:w-64 hidden md:block sticky top-20 self-start">
        <Sidebar />
      </aside>
      <section className="relative flex-1 h-auto md:h-72 bg-black text-white rounded-lg overflow-hidden flex items-center p-6 select-none">
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          <div className="max-w-xs md:max-w-md flex flex-col md:flex-row items-start md:items-center z-10 text-center md:text-left">
            <Image src="/icons/apple.svg" alt="Apple Icon" width={40} height={40} priority className="mb-4 md:mb-0 md:mr-3" />
            <div className="md:ml-3">
              <span className="text-xs uppercase text-red-400 tracking-wide">iPhone 14 Series</span>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Up to 10% off Voucher
              </h2>
              <p className="mt-2 text-gray-300 text-sm md:text-base max-w-sm">
              </p>
              <Link
                href="/products"
                className="mt-6 inline-block bg-white text-black font-semibold rounded-md px-6 py-2 md:px-8 md:py-3 hover:bg-gray-200 select-none text-sm md:text-base"
              >
                Shop Now 
              </Link>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-72 md:h-72 mt-6 md:mt-0">
            <Image
              src="/images/iphone-purple.jpg"
              alt="Hero iPhone Purple"
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="(min-width: 768px) 288px, 192px"
            />
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${i === 0 ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
    <section className="max-w-7xl mx-auto px-4 mb-14">
      <p className="uppercase text-red-600 font-semibold mb-1 select-none">Today&apos;s</p>
      <h3 className="text-2xl font-bold mb-4 select-none">Flash Sales</h3>
      <div className="flex flex-wrap gap-4 md:gap-6 items-center mb-4 select-none text-sm font-mono font-semibold text-gray-800">
        {[
          { label: "Days", value: "03" },
          { label: "Hours", value: "23" },
          { label: "Minutes", value: "19" },
          { label: "Seconds", value: "56" },
        ].map(({ label, value }, idx) => (
          <React.Fragment key={label}>
            {idx > 0 && <span className="hidden sm:inline">:</span>}
            <div className="flex flex-col items-center px-3 py-1 bg-gray-200 rounded min-w-[50px] sm:min-w-0">
              <span>{value}</span>
              <span className="text-xs uppercase">{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {flashSales.map((product, i) => (
          <div
            key={i}
            className="relative bg-white p-4 rounded-lg shadow border hover:shadow-lg transition-transform duration-200 hover:scale-[1.03] flex flex-col"
          ><span className="absolute top-2 left-2 bg-red-600 text-xs text-white font-bold px-2 py-0.5 rounded select-none">
              -{product.discount}%
            </span>
            <div className="absolute top-2 right-2 flex space-x-2 text-gray-400">
              <button aria-label="Add to Wishlist" className="hover:text-red-600 transition" type="button">
                <Image src="/icons/heart.svg" alt="Love" width={20} height={20} />
              </button>
              <button aria-label="Quick View" type="button" className="hover:text-black transition">
                <Image src="/icons/eye.svg" alt="Eye" width={20} height={20} />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="mx-auto mb-4 select-none pointer-events-none"
                priority={i === 0}
              />
            </div>
            <h3 className="text-base font-semibold mb-1 truncate">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 font-bold text-lg">${product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
              )}
            </div>
            <StarRating />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href="/flash-sales"
          className="bg-red-600 text-white rounded-lg px-8 py-3 font-semibold hover:bg-red-700 select-none"
        >
          View All Products
        </Link>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 mb-14">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Browse By Category</h3>
        <div className="flex space-x-4">
          <button aria-label="Previous" className="p-1 rounded hover:bg-gray-200 select-none">
            <Image src="/icons/back.svg" alt="Back" width={24} height={24} />
          </button>
          <button aria-label="Next" className="p-1 rounded hover:bg-gray-200 select-none">
            <Image src="/icons/next.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/category/${cat.name.toLowerCase()}`}
            className={`flex flex-col items-center border transition-colors rounded-lg p-6 cursor-pointer select-none ${
              cat.name === "Camera" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <Image
              src={cat.icon}
              alt={cat.name}
              width={48}
              height={48}
              className={`mb-2 ${cat.name === "Camera" ? "filter invert" : ""}`}
            />
            <span className="text-sm font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 mb-14">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Best Selling Products</h3>
        <Link href="/best-sellers" className="font-semibold text-red-600 hover:underline select-none">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {bestSellers.map((product, i) => (
          <div
            key={i}
            className="relative bg-white p-4 rounded-lg shadow border hover:shadow-lg transition-transform duration-200 hover:scale-[1.03] flex flex-col"
          >
            <button
              aria-label="Add to Wishlist"
              className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
              type="button"
            >
              <Image src="/icons/heart.svg" alt="Love" width={20} height={20} />
            </button>
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="mx-auto mb-4 select-none pointer-events-none"
                priority={i === 0}
              />
            </div>
            <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 font-bold text-lg">${product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
              )}
            </div>
            <StarRating />
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-3xl mx-auto relative h-auto md:h-60 bg-black text-white rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8 mb-14 select-none">
      <div className="z-10 max-w-sm md:max-w-md space-y-4 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight">Enhance Your Music Experience</h3>
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
          {[
            { label: "Days", value: "28" },
            { label: "Hours", value: "05" },
            { label: "Minutes", value: "59" },
            { label: "Seconds", value: "35" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center mb-2 md:mb-0">
              <span className="text-lg font-bold bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">{value}</span>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
        <Link href="/music-products" className="inline-block bg-green-500 hover:bg-green-600 font-semibold text-black px-6 py-3 rounded transition select-none">
          Buy Now
        </Link>
      </div>
      <div className="relative w-48 h-32 mt-6 md:mt-0 md:absolute md:right-12 md:top-5">
        <Image src="/images/jbl.jpeg" alt="JBL Speaker" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-lg" />
    </section>
    <section className="max-w-7xl mx-auto px-4 mb-14">
      <h3 className="text-xl font-semibold mb-6">Explore Our Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {exploreProducts.map((product, i) => (
          <div
            key={i}
            className="relative bg-white p-4 rounded-lg shadow border hover:shadow-lg transition-transform duration-200 hover:scale-[1.03] flex flex-col"
          >
            {product.newBadge && (
              <span className="absolute top-2 left-2 bg-green-600 text-xs text-white font-bold px-2 py-0.5 rounded select-none">
                NEW
              </span>
            )}
            <div className="absolute top-2 right-2 flex space-x-2 text-gray-400">
              <button aria-label="Add to Wishlist" className="hover:text-red-600 transition" type="button">
                <Image src="/icons/heart.svg" alt="Love" width={20} height={20} />
              </button>
              <button aria-label="Quick View" type="button" className="hover:text-black transition">
                <Image src="/icons/eye.svg" alt="Eye" width={20} height={20} />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="mx-auto mb-4 select-none pointer-events-none"
                priority={i === 0}
              />
            </div>
            <h4 className="font-semibold mb-2 truncate">{product.name}</h4>
            <span className="text-red-600 font-bold text-lg">${product.price}</span>
            <div className="mt-1">
              <StarRating />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/explore-products"
          className="font-semibold text-white bg-red-600 hover:bg-red-700 px-12 py-3 rounded shadow-lg select-none"
        >
          View All Products
        </Link>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 mb-14">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">New Arrival</h3>
        <Link href="/new-arrivals" className="text-red-600 font-semibold hover:underline select-none">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative bg-black rounded-lg shadow-lg overflow-hidden h-96 flex items-center justify-center select-none">
          <Image
            src={newArrivals[0].image}
            alt={newArrivals[0].name}
            fill
            style={{ objectFit: "contain" }}
            priority
            sizes="(min-width: 768px) 384px, 100vw"
          />
          <div className="absolute bottom-5 left-5 text-white z-10 max-w-xs">
            <h4 className="text-2xl font-bold mb-2">{newArrivals[0].name}</h4>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <Link
              href="/new-arrivals"
              className="mt-4 inline-block bg-red-600 px-5 py-2 rounded hover:bg-red-700 font-semibold select-none text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative bg-black rounded-lg shadow-lg overflow-hidden h-48 select-none">
            <Image
              src={newArrivals[3].image}
              alt={newArrivals[3].name}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(min-width: 768px) 192px, 100vw"
            />
            <div className="absolute bottom-3 left-3 text-white text-lg font-semibold z-10">
              Women&apos;s Collections
              Featured woman collections that give you another vibe.
            </div>
            <Link
              href="/new-arrivals"
              className="absolute bottom-3 right-3 text-sm text-red-600 z-10 hover:underline select-none"
            >
               Shop Now
            </Link>
          </div>
          <div className="relative bg-black rounded-lg shadow-lg overflow-hidden h-48 select-none">
            <Image
              src={newArrivals[1].image}
              alt={newArrivals[1].name}
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="(min-width: 768px) 192px, 100vw"
            />
            <div className="absolute bottom-3 left-3 text-white text-lg font-semibold z-10">Speakers<b/>
              Amazon wireless speakers
            </div>
            <Link
              href="/new-arrivals"
              className="absolute bottom-3 right-3 text-sm text-red-600 z-10 hover:underline select-none"
            >
              Shop Now
            </Link>
          </div>
          <div className="relative bg-black rounded-lg shadow-lg overflow-hidden h-48 col-span-2 flex flex-col justify-center items-center select-none">
            <Image src={newArrivals[2].image} alt={newArrivals[2].name} width={60} height={80} priority />
            <div className="text-white mt-3 font-semibold text-lg">
              Perfume <br/>
              GUCCI INTENSE OUD EDP
            </div>
            <Link href="/new-arrivals" className="text-red-600 mt-1 hover:underline select-none">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
<section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center mb-14 px-6 select-none">
      <div>
        <div className="mb-3 flex justify-center items-center">
          <Image src="/icons/delivery-car.svg" alt="Delivery Car" width={36} height={36} />
        </div>
        <h4 className="font-semibold mb-1">FREE AND FAST DELIVERY</h4>
        <p className="text-gray-600 text-sm">Free delivery for all orders over $50</p>
      </div>

      <div>
        <div className="mb-3 flex justify-center items-center">
          <Image src="/icons/clock.svg" alt="Clock" width={36} height={36} />
        </div>
        <h4 className="font-semibold mb-1">24/7 CUSTOMER SERVICE</h4>
        <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
      </div>
      <div>
     <div className="mb-3 flex justify-center items-center">
          <Image src="/icons/tick.svg" alt="Tick" width={36} height={36} />
        </div>
        <h4 className="font-semibold mb-1">MONEY BACK GUARANTEE</h4>
        <p className="text-gray-600 text-sm">We return money within 30 days</p>
      </div>
    </section>
  </>
);

export default HomePageContent;
