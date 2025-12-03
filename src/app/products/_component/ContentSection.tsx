"use client";

import Image from "next/image";
import type { ContentSection } from "@/types/product";
import PriceTable from "./PriceTable";

interface Props {
  section: ContentSection;
  id?: string;
}

export default function ContentSectionRenderer({ section, id }: Props) {
  switch (section.type) {
    case "text":
    case "composition":
      return (
        <div id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          {section.body.split("\n\n").map((block, i) => {
            // Check if block contains bullet points
            const lines = block.split("\n");
            const hasBullets = lines.some((line) => line.trim().startsWith("•"));

            if (hasBullets) {
              // Separate intro text from bullet items
              const introLines: string[] = [];
              const bulletItems: string[] = [];

              lines.forEach((line) => {
                if (line.trim().startsWith("•")) {
                  bulletItems.push(line.trim().replace(/^•\s*/, ""));
                } else if (line.trim()) {
                  introLines.push(line);
                }
              });

              return (
                <div key={i} className="mb-4">
                  {introLines.length > 0 && (
                    <p className="text-gray-600 mb-2">{introLines.join(" ")}</p>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {bulletItems.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <p key={i} className="text-gray-600 mb-4">
                {block}
              </p>
            );
          })}
        </div>
      );

    case "image":
      return (
        <figure id={id} className="my-8 scroll-mt-24">
          <Image
            src={section.url}
            alt={section.alt}
            width={800}
            height={500}
            className="w-full rounded-lg"
          />
          {section.caption && (
            <figcaption className="text-center text-gray-500 text-sm mt-2">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "pros_cons":
      return (
        <div id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          {section.intro && (
            <p className="text-gray-600 mb-4">{section.intro}</p>
          )}

          {section.pros.length > 0 && (
            <>
              {section.cons.length > 0 && (
                <h3 className="font-semibold text-gray-800 mt-4 mb-2">Ưu điểm:</h3>
              )}
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {section.pros.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {section.cons.length > 0 && (
            <>
              <h3 className="font-semibold text-gray-800 mt-4 mb-2">Nhược điểm:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {section.cons.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      );

    case "price_table":
      return (
        <div id={id} className="scroll-mt-24">
          <PriceTable title={section.title} data={section.data} />
        </div>
      );

    case "applications":
      return (
        <div id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          {section.intro && (
            <p className="text-gray-600 mb-4">{section.intro}</p>
          )}
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {section.items.map((item, i) => {
              const [label, ...rest] = item.split(":");
              return (
                <li key={i}>
                  <strong>{label}:</strong>
                  {rest.join(":")}
                </li>
              );
            })}
          </ul>
        </div>
      );

    default:
      return null;
  }
}
