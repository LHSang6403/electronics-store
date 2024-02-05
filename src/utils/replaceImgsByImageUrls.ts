export default function replaceImgsByImageUrls(
  content: string,
  imageUrls: string[]
) {
  const imgTags = content.match(/<img[^>]+>/g);

  if (imgTags) {
    const updatedContent = imgTags.reduce((acc, imgTag, index) => {
      const updatedImg = `<img style="width: 80%; margin: 36px auto;" src="${imageUrls[index]}" />`;
      return acc.replace(imgTag, updatedImg);
    }, content);

    return updatedContent;
  }

  return content;
}
