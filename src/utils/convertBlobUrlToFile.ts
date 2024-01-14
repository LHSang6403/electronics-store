"use client";

export default async function convertBlobUrlToFile(
  blobUrl: string,
  fileName: string
) {
  try {
    const response = await fetch(blobUrl);
    const blob = await response.blob();

    return new File([blob], fileName, { type: blob.type });
  } catch (error) {
    console.error("Error converting Blob URL to File:", error);
    throw error;
  }
}
