import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function BusinessCard({
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl bg-zinc-900 transition duration-500 hover:-translate-y-2"
    >
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="p-8">
        <h3 className="text-3xl text-white">{title}</h3>

        <p className="mt-2 text-gray-400">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}