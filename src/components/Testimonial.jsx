import testimonial from "../assets/icons/testimonial.svg";
const Testimonial = () => {
  return (
    <>
      <div
        className="container flex flex-col items-center mx-auto p-6"
        id="harga"
      >
        {/* Tag solution */}
        <div className="flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
          <img
            src={testimonial}
            alt="testimonial icon"
            className="w-6 h-6 text-blue-500"
          />
          <span className="px-2 rounded-full font-semibold text-blue-500">
            Harga
          </span>
        </div>

        {/* Title and description */}
        <div className="container">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Berlangganan untuk mengakses fitur tanpa batas
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Akses semua fitur premium POS Laundry dengan berlangganan.
            Tingkatkan efisiensi dan optimalkan bisnis laundry Anda sekarang
            juga.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
