import Compressor from "./compressor";

class PngCompressor implements Compressor {
  compress(fileName: string): void {
    console.log(`Compress (${fileName}) With PNG Compressor...`);
  }
}

export default PngCompressor;
