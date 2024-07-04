import PropTypes from "prop-types";
import "aos/dist/aos.css";

const Tag = (props) => {

  return (
    <div
      className="flex flex-col items-center w-full max-w-2xl text-center mb-8"
      data-aos="fade-up"
    >
      {/* Tag Title */}
      <div className="inline-flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
        <img
          src={props.icon}
          alt={props.alt}
          className="w-8 h-8 text-blue-500"
          data-aos="zoom-in"
        />
        <span className="px-2 rounded-full text-lg font-semibold text-blue-500">
          {props.tag}
        </span>
      </div>
      {/* Title and description */}
      <h1 className="text-3xl font-bold mb-2 leading-snug" data-aos="fade-up">
        {props.title}
      </h1>
      <p className="text-gray-500 text-sm px-2 mb-3" data-aos="fade-up">
        {props.desc}
      </p>
    </div>
  );
};

Tag.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Tag;
