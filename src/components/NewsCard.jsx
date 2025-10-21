import { FaBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 md:p-5 mx-auto mb-4">
      {/* Author Info */}
      <div className="flex justify-between items-center mb-3 bg-base-200 p-2 rounded-md">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-800">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700 flex gap-2">
          <FaBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-3">
        {title}
      </h2>

      {/* Thumbnail */}
      <div className="rounded-xl overflow-hidden mb-3">
        <img src={thumbnail_url} alt={title} className="w-full h-56 object-cover" />
      </div>

      {/* Details */}
      <p className="text-gray-600 text-sm mb-3">
        {details.length > 150 ? details.slice(0, 150) + "..." : details}
        <Link
          to={`/news/${id}`}
          className="text-orange-500 font-medium hover:underline ml-1"
        >
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;