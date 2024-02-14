import QrScanner from "qr-scanner";
import {compress, compressAccurately} from 'image-conversion';

/**
 * @class CameraController
 * @classdesc
 * This class handles the camera logic.
 * It uses the MediaDevices API to access the camera and torch.
 * The MediaDevices API is not supported in all browsers.
 *
 * @property {boolean} torch - The torch state.
 * @property {HTMLVideoElement} videoElement - The video element.
 * @property {QrScanner} qrScanner - The QR scanner object.
 * @property {object} qrScannerOptions - The QR scanner camera options.
 * @method startCamera - Starts the camera.
 * @method startQrScannerCamera - Starts the QR scanner camera.
 * @method stopCamera - Stops the camera.
 * @method stopQrScannerCamera - Stops the QR scanner camera.
 * @method getCurrentFacingMode - Gets the current facing mode.
 * @method setCanvasSize - Sets the canvas size.
 * @method drawImageOnCanvas - Draws the image on the canvas.
 * @method restartCamera - Restarts the camera.
 * @method restartQrScannerCamera - Restarts the QR scanner camera.
 * @method takePicture - Takes a picture.
 * @method takeQrScannerPicture - Takes a QR scanner picture.
 * @method toggleFlash - Toggles the flash.
 * @method toggleQrScannerFlash - Toggles the QR scanner flash.
 * @method reverseCamera - Reverses the camera.
 * @method reverseQrScannerCamera - Reverses the QR scanner camera.
 */
export class CameraController {
    private torch: boolean;
    private videoElement: HTMLVideoElement | null;
    private qrScannerOptions : object;
    private qrScanner: QrScanner | null;
  
    constructor() {
      this.torch = false;
      this.videoElement = document.getElementById("videoEl") as HTMLVideoElement;
      this.qrScanner = null;
      this.qrScannerOptions = {
        preferredCamera: "environment",
        returnDetailedScanResult: false,
        onDecodeError	: (error: any) => {},
        maxScansPerSecond: -1,
        };
    }
  
    /**
     * Starts the camera.
     * @param {string} facingMode - The facing mode.
     */
    async startCamera(facingMode: string = "environment"): Promise<void> {
      if (!this.videoElement) return;
  
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: facingMode },
            width: { min: 640, ideal: 2560, max: 2560 },
            height: { min: 480, ideal: 1440, max: 1440 },
          },
        });
        this.videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error starting the camera:", error);
      }
    }

    /**
     * Starts the QR scanner camera.
     */
    startQrScannerCamera(): void {
        if (!this.videoElement) return;

        this.qrScanner = new QrScanner(
            this.videoElement,
            (result: string) => {},
            this.qrScannerOptions as any
          );
        this.qrScanner.start();
    }

    /**
     * Stops the camera.
     */
    stopCamera(): void {
      if (!this.videoElement || !this.videoElement.srcObject) return;
  
      const stream = this.videoElement.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  
    /**
     * Stops the QR scanner camera.
     */
    stopQrScannerCamera(): void {
        if (!this.qrScanner) return;
        if (!this.videoElement) return;
    
        this.qrScanner.pause();
    }
      
    /**
     * Gets the current facing mode.
     * @returns {string} The current facing mode.
     */
    private getCurrentFacingMode(): string {
      if (!this.videoElement) return "environment";
  
      const stream = this.videoElement.srcObject as MediaStream;
      return stream.getVideoTracks()[0].getSettings().facingMode ?? "";
    }
  
    /**
     * Restarts the current camera.
     */
    async restartCamera(): Promise<void> {
      if (!this.videoElement) return;
      const currentFacingMode = this.getCurrentFacingMode();
  
      this.stopCamera();
      await this.startCamera(currentFacingMode);
    }

    /**
     * Restarts the current QR scanner camera.
     */
    async restartQrScannerCamera(): Promise<void> {
        if (!this.qrScanner) return;
        if (!this.videoElement) return;

        this.startQrScannerCamera();
    }
  
    /**
     * Takes a picture.
     */
    async takePicture(compressImage : boolean = false): Promise<void> {
      if (!this.videoElement) return;
  
      if (this.torch) await this.toggleFlash();
  
      const canvas = document.createElement("canvas");
      this.setCanvasSize(canvas);
      this.drawImageOnCanvas(canvas);
  
      canvas.toBlob(async (blob) => {
        if (blob) {
            // Handle the taken picture (e.g., show in new tab, save, etc.)
            const imageUrl = URL.createObjectURL(blob);
            console.log("Produced image of size " + (blob.size/1024).toFixed(2) + " kB");
            const compressionRatio = 0.8;
            const compressed = compressImage? await compressAccurately(blob, (blob.size * compressionRatio)/1024) : blob;
            console.log("Compressed image of size " + (compressed.size/1024).toFixed(2) + " kB");
        }
      }, "image/jpeg");
    }

    /**
     * Takes a picture when using the QR scanner.
     */
    async takeQrScannerPicture(compressImage : boolean = false): Promise<void> {
        if (!this.qrScanner) return;
        if (!this.videoElement) return;
        if (this.torch) await this.toggleFlash();

        const canvas = document.createElement("canvas");
        this.setCanvasSize(canvas);
        this.drawImageOnCanvas(canvas);

        canvas.toBlob(async (blob) => {
          if (blob) {
            // Handle the taken picture (e.g., show in new tab, save, etc.)
            const imageUrl = URL.createObjectURL(blob);
            console.log("Produced image of size " + (blob.size/1024).toFixed(2) + " kB");
            const compressionRatio = 0.8;
            const compressed = compressImage? await compressAccurately(blob, (blob.size * compressionRatio)/1024) : blob;
            console.log("Compressed image of size " + (compressed.size/1024).toFixed(2) + " kB");
            //window.open(imageUrl);
          }
          }, "image/jpeg");
    }
  
    /**
     * Sets the canvas size.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     */
    private setCanvasSize(canvas: HTMLCanvasElement): void {
      if (!this.videoElement) return;
  
      const videoRatio =
        this.videoElement.videoWidth / this.videoElement.videoHeight;
      const elementRatio =
        this.videoElement.clientWidth / this.videoElement.clientHeight;
      let sourceX = 0,
        sourceY = 0;
      let sourceWidth = this.videoElement.videoWidth;
      let sourceHeight = this.videoElement.videoHeight;
  
      if (videoRatio > elementRatio) {
        sourceWidth = sourceHeight * elementRatio;
        sourceX = (this.videoElement.videoWidth - sourceWidth) / 2;
      } else {
        sourceHeight = sourceWidth / elementRatio;
        sourceY = (this.videoElement.videoHeight - sourceHeight) / 2;
      }
  
      canvas.width = this.videoElement.clientWidth;
      canvas.height = this.videoElement.clientHeight;
    }
  
    /**
     * Draws the image on the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     */
    private drawImageOnCanvas(canvas: HTMLCanvasElement): void {
      if (!this.videoElement) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      this.videoElement.pause();
      ctx.drawImage(
        this.videoElement,
        0,
        0,
        this.videoElement.videoWidth,
        this.videoElement.videoHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  
    /**
     * Toggles the flash on and off.
     */
    async toggleFlash() {
      // Check for MediaDevices API support
      if (!("mediaDevices" in navigator)) {
        console.error("MediaDevices API not supported.");
        return;
      }
  
      try {
        // Enumerate devices and filter for video input (cameras)
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );
  
        if (videoInputDevices.length === 0) {
          console.error("No camera found on this device.");
          return;
        }
  
        // Attempt to get a video stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        const track: any = stream.getVideoTracks()[0];
  
        // Create an ImageCapture object
        const imageCapture = new (window as any).ImageCapture(track);
  
        // Get camera capabilities
        const capabilities = await imageCapture.getPhotoCapabilities();
        const torchSupported =
          capabilities.torch ||
          ("fillLightMode" in capabilities &&
            capabilities.fillLightMode.length !== 0 &&
            capabilities.fillLightMode !== "none");
  
        if (torchSupported) {
          this.torch = !this.torch;
          await track.applyConstraints({ advanced: [{ torch: this.torch }] });
        } else {
          console.error("Torch mode is not supported on this camera.");
        }
      } catch (error) {
        console.error("Error toggling the flash:", error);
      }
    }

    /**
     * Toggles the QR scanner flash.
    */
    async toggleQrScannerFlash(): Promise<void> {
        if (!this.qrScanner) return;
        if (!this.videoElement) return;

        this.qrScanner.toggleFlash();
    }

    /**
     * Reverses the camera.
     */
    async reverseCamera(): Promise<void> {
      const currentFacingMode = this.getCurrentFacingMode();
  
      this.stopCamera();
      await this.startCamera(
        currentFacingMode === "environment" ? "user" : "environment"
      );
    }

    /**
     * Reverses the QR scanner camera.
     */
    async reverseQrScannerCamera(): Promise<void> {
        if (!this.qrScanner) return;
        if (!this.videoElement) return;

        this.qrScanner.setCamera(this.getCurrentFacingMode() === "environment" ? "user" : "environment");
    }
}