type LoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

export default function cloudinaryLoader({ src, width, quality }: LoaderParams): string {
  const params = `f_auto,c_limit,w_${width},q_${quality ?? "auto"}`;
  return src.replace("/upload/", `/upload/${params}/`);
}
