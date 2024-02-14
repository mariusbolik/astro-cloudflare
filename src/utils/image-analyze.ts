import type { Scan } from '../types/types';
import { CV_32FC2, Mat, Size, getPerspectiveTransform, matFromArray, matFromImageData, resize, warpPerspective } from '@techstark/opencv-js';
import { default as sharp } from 'sharp';
// import Jimp from 'jimp';

export class ImageProcessor {
  /**
   * This server side function takes an AIResponse object and and image buffer as input,
   * and performs perspective transformation on the image using the analysis result.
   * OpenCV Code by Fraunhofer, Server Side Code by mySHOEFITTER.
   * 
   * IMPORTANT NOTE: If you face any strange image outputs, make sure the input image is
   * processed correctly. If necessary, use the Jimp fallback code to process the image.
   * 
   * @param analysisResult 
   * @param imgElement 
   * @param canvasEL 
   */
  public async processImageSSR(analysisResult: Scan, buffer: Buffer): Promise<Buffer> {

    // Sharp
    // https://github.com/lovell/sharp/issues/3291
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const { width, height } = info;

    // Jimp (Fallback for Sharp)
    // const image = await Jimp.read(from);
    // const { width, height } = image.bitmap;
    // const data = new Uint8Array(image.bitmap.data.buffer);

    const srcImage = matFromImageData({ data, width, height });

    // Create a matrix from the input analysis result coordinates
    const srcCoords = matFromArray(4, 1, CV_32FC2, [
      analysisResult.a4_top_left[0], analysisResult.a4_top_left[1],
      analysisResult.a4_top_right[0], analysisResult.a4_top_right[1],
      analysisResult.a4_bottom_right[0], analysisResult.a4_bottom_right[1],
      analysisResult.a4_bottom_left[0], analysisResult.a4_bottom_left[1]]);

    // Get the rescaled width and height from the analysis result
    const rescaleWidth = analysisResult.rescale_width;
    const rescaleHeight = analysisResult.rescale_height;

    // Calculate the offset width and height based on the margin width and height from the analysis result
    const offsetWidth = rescaleWidth * analysisResult.margin_width;
    const offsetHeight = rescaleHeight * analysisResult.margin_height;

    // Create a matrix for the destination coordinates, accounting for the offsets
    const dstCoords = matFromArray(4, 1, CV_32FC2, [offsetWidth, offsetHeight, rescaleWidth - offsetWidth, offsetHeight, rescaleWidth - offsetWidth, rescaleHeight - offsetHeight, offsetWidth, rescaleHeight - offsetHeight]);

    // Calculate the perspective transform matrix
    const transformMatrix = getPerspectiveTransform(srcCoords, dstCoords);

    // Free up memory by deleting the source and destination coordinate matrices
    srcCoords.delete();
    dstCoords.delete();

    // Initialize an empty destination image and size
    const dstImage = new Mat();
    const dstSize = new Size(rescaleWidth, rescaleHeight);


    // Apply the perspective transformation
    warpPerspective(srcImage, dstImage, transformMatrix, dstSize)
    transformMatrix.delete();
    srcImage.delete();

    // console.log('dstImage (warpPerspective)', dstImage.data);
    // console.log('srcImage (warpPerspective)', srcImage.data);

    // Initialize an empty resized image
    const resizedImage = new Mat();

    // Resize the destination image to half its size
    resize(dstImage, resizedImage, new Size(width as number, height as number));
    dstImage.delete();

    // console.log('dstImage (processed)', dstImage.data);
    // console.log('resizedImage (processed)', resizedImage.data);

    // Convert back to an image and save
    const rawBufferData = Buffer.from(resizedImage.data);
    resizedImage.delete();

    // Sharp
    const jpegBuffer = await sharp(rawBufferData, {
      raw: {
        width,
        height,
        channels: 4
      }
    })
      .jpeg()
      .toBuffer();

    // Jimp (Fallback for Sharp) d
    // const transformedImage = new Jimp({data: rawBufferData, width, height});
    // const jpegBuffer = await transformedImage.quality(10).getBufferAsync('image/jpeg');

    return jpegBuffer;
  }

  /**
   * Client Side Implementation of image processing
  */
  public async processImageCSR(analysisResult: Scan, blob: Blob): Promise<any> {
    // Copy from old pwa.
    // Possibly use as fallback for SSR.
    // Not needed for now.
  }

  /**
   * TODO: Calculate the missing edge
   * @param analysisResult Scan
   */
  private calculateMissingEdge(analysisResult: Scan) { }
}

