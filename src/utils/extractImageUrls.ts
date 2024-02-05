export default function extractImageUrls(htmlContent: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const images = doc.querySelectorAll("img");
  const imageUrls = Array.from(images).map((img) => img.src);

  return imageUrls;
}
