import Link from "next/link";

interface NewsProps {
  href: string;
  title: string;
}
export function News({ href, title }: NewsProps) {
  title = title.length > 115 ? `${title.substring(0, 115)}...` : title;
  return (
    <div className="mt-5 first:mt-0 border-t-[1px]">
      <Link href={href} target="_blank">
        <h4 className="text-sm font-[600] leading-5 mt-5 hover:text-brand">
          {title}
        </h4>
      </Link>
    </div>
  );
}
