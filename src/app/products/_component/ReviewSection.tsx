"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface ReviewSectionProps {
  productName: string;
}

const ratingLabels = [5, 4, 3, 2, 1];

export default function ReviewSection({ productName }: ReviewSectionProps) {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [gender, setGender] = useState<"anh" | "chi">("anh");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // Mock data - in real app, this would come from API
  const ratings = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  const totalReviews = Object.values(ratings).reduce((a, b) => a + b, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedRating, gender, name, email, comment });
  };

  // Custom input class
  const inputClass = `
    px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700
    focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(153,101,21,0.15)]
    transition-all duration-150 placeholder:text-gray-400
  `;

  return (
    <div>
      {/* Rating Summary */}
      <h2 className="text-lg font-bold text-gray-900 mb-6">
        Đánh giá {productName}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
        {/* Star Breakdown */}
        <div className="flex-1 space-y-2">
          {ratingLabels.map((star) => {
            const count = ratings[star as keyof typeof ratings];
            const percentage =
              totalReviews > 0 ? (count / totalReviews) * 100 : 0;

            return (
              <div key={star} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-10">
                  <span className="text-sm font-medium text-gray-700">
                    {star}
                  </span>
                  <Star className="w-4 h-4 fill-gray-800 text-gray-800" />
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FFCC00] transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-[#991B1B] font-medium w-28 text-right">
                  {percentage.toFixed(0)}% | {count} đánh giá
                </span>
              </div>
            );
          })}
        </div>

        {/* Rate Now Button */}
        <div className="flex items-center justify-center lg:justify-start">
          <button
            type="button"
            onClick={() => setShowRatingForm(!showRatingForm)}
            className="px-6 py-3 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-bold rounded-lg hover:shadow-lg transition-all whitespace-nowrap btn-shine"
          >
            ĐÁNH GIÁ NGAY
          </button>
        </div>
      </div>

      {/* Rating Form (shown when clicking ĐÁNH GIÁ NGAY) */}
      {showRatingForm && (
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-[#D4AF37]/5 rounded-lg border border-primary/20">
          <p className="text-sm text-gray-600 mb-3">Chọn số sao đánh giá:</p>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setSelectedRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 transition-transform hover:scale-110"
              >
                {""}
                <Star
                  className={`w-8 h-8 transition-colors ${
                    star <= (hoverRating || selectedRating)
                      ? "fill-[#FFCC00] text-[#FFCC00]"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Reviews Message */}
      <p className="text-gray-500 italic mb-8">Chưa có đánh giá nào.</p>

      {/* Comment Form */}
      <div className="border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(153,101,21,0.15)] transition-all duration-150">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Mời bạn tham gia thảo luận, vui lòng nhập tiếng Việt có dấu"
          rows={5}
          className="w-full p-4 resize-none focus:outline-none text-gray-700 placeholder:text-gray-400"
        />

        {/* Form Footer */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-3 bg-gray-50 border-t border-gray-200">
          {/* Gender Selection */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                checked={gender === "anh"}
                onChange={() => setGender("anh")}
                className="w-4 h-4 text-primary accent-primary cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                Anh
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                checked={gender === "chi"}
                onChange={() => setGender("chi")}
                className="w-4 h-4 text-primary accent-primary cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                Chị
              </span>
            </label>
          </div>

          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Họ tên (bắt buộc)"
            className={`flex-1 min-w-[150px] ${inputClass}`}
          />

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`flex-1 min-w-[150px] ${inputClass}`}
          />

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-bold rounded-lg hover:shadow-lg transition-all btn-shine"
          >
            GỬI
          </button>
        </div>
      </div>

      {/* No Comments Message */}
      <p className="text-gray-500 italic mt-6">Chưa có bình luận nào</p>
    </div>
  );
}
