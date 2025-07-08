import { NotFound } from "@/components";

type SearchParams = {
  query?: string;
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {

  return (
    <NotFound/>
  );
}
